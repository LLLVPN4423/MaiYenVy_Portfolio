import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CornerFlourish, SparkleField, FireflyField, MoonGlow } from './decor/Ornaments'

const STORAGE_KEY = 'midnight-intro-seen'
const BASE = import.meta.env.BASE_URL
/** Deployed at public root (NOT under gitignored public/media/) */
const INTRO_SRC = `${BASE}midnight-royal-intro-desktop.mp4`

const EXPAND_LEAD_S = 2.8
const IMMERSION_HOLD_MS = 450
const FADE_MS = 900
const LOAD_TIMEOUT_MS = 10000

/**
 * Midnight Royal Vintage Storybook — cinematic intro.
 *
 * loading → ready → playing → expanding → immersing → transition → done
 * (error is recoverable via retry / enter site)
 *
 * Bloom = transform scale from measured frame → cover viewport (no width snaps).
 * Phase timers live in phase-keyed useEffects (overflow cleanup must never clear them).
 */
const Intro = ({ onComplete }) => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [phase, setPhase] = useState(() => {
    if (prefersReduced) return 'done'
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return 'done'
    } catch {}
    return 'loading'
  })
  const [needsTap, setNeedsTap] = useState(false)
  const [bloomScale, setBloomScale] = useState(1)

  const videoRef = useRef(null)
  const stageRef = useRef(null)
  const finishedRef = useRef(false)
  const autoplayTriedRef = useRef(false)
  const expandStartedRef = useRef(false)

  const markSeen = useCallback(() => {
    try { sessionStorage.setItem(STORAGE_KEY, '1') } catch {}
  }, [])

  const complete = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    if (phase === 'done') complete()
  }, [phase, complete])

  useEffect(() => {
    if (phase === 'done') return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [phase])

  useEffect(() => {
    if (phase !== 'immersing') return
    const id = setTimeout(() => setPhase('transition'), IMMERSION_HOLD_MS)
    return () => clearTimeout(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'transition') return
    const id = setTimeout(() => setPhase('done'), FADE_MS)
    return () => clearTimeout(id)
  }, [phase])

  /** Never leave the spinner hanging if the MP4 404s / stalls on Pages */
  useEffect(() => {
    if (phase !== 'loading') return
    const id = setTimeout(() => {
      setPhase((p) => (p === 'loading' ? 'error' : p))
    }, LOAD_TIMEOUT_MS)
    return () => clearTimeout(id)
  }, [phase])

  const measureBloomScale = useCallback(() => {
    const el = stageRef.current
    if (!el) return 1.85
    const r = el.getBoundingClientRect()
    if (!r.width || !r.height) return 1.85
    return Math.max(window.innerWidth / r.width, window.innerHeight / r.height) * 1.05
  }, [])

  const beginExpand = useCallback(() => {
    if (expandStartedRef.current || finishedRef.current) return
    expandStartedRef.current = true
    setBloomScale(measureBloomScale())
    setPhase('expanding')
  }, [measureBloomScale])

  const tryPlay = useCallback(() => {
    const v = videoRef.current
    if (!v || autoplayTriedRef.current) return
    autoplayTriedRef.current = true
    v.play().catch(() => setNeedsTap(true))
  }, [])

  const handleCanPlay = useCallback(() => {
    setPhase((p) => (p === 'loading' || p === 'ready' ? 'ready' : p))
    tryPlay()
  }, [tryPlay])

  const handlePlaying = useCallback(() => {
    setNeedsTap(false)
    setPhase((p) => (p === 'ready' || p === 'playing' || p === 'loading' ? 'playing' : p))
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return
    if (phase !== 'playing' && phase !== 'ready') return
    if (v.duration - v.currentTime <= EXPAND_LEAD_S) beginExpand()
  }, [phase, beginExpand])

  const handleEnded = useCallback(() => {
    markSeen()
    if (!expandStartedRef.current) beginExpand()
    setPhase('immersing')
  }, [markSeen, beginExpand])

  const skip = useCallback(() => {
    markSeen()
    videoRef.current?.pause()
    if (!expandStartedRef.current) {
      expandStartedRef.current = true
      setBloomScale(measureBloomScale())
    }
    setPhase('transition')
  }, [markSeen, measureBloomScale])

  const handleTapToPlay = useCallback(() => {
    setNeedsTap(false)
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => setNeedsTap(true))
  }, [])

  const handleError = useCallback(() => {
    videoRef.current?.pause()
    setNeedsTap(false)
    setPhase((p) => (p === 'done' || p === 'transition' || p === 'immersing' ? p : 'error'))
  }, [])

  const handleRetry = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    autoplayTriedRef.current = false
    expandStartedRef.current = false
    setPhase('loading')
    try { v.load() } catch {}
  }, [])

  const blooming = phase === 'expanding' || phase === 'immersing'
  const fading = phase === 'transition'
  const immersive = blooming || fading
  const showSpinner = phase === 'loading' || (phase === 'ready' && !needsTap)

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{
            background: immersive || phase === 'error'
              ? '#070912'
              : 'radial-gradient(120% 120% at 50% 0%, #16122a 0%, #10101c 50%, #090B16 100%)',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fading ? FADE_MS / 1000 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Video giới thiệu"
          aria-modal="true"
        >
          <div
            className={`absolute inset-0 starfield transition-opacity duration-1000 ${immersive ? 'opacity-95' : 'opacity-40'}`}
            aria-hidden="true"
          />
          <div className="absolute inset-0 night-sky" aria-hidden="true" />
          <div className="absolute inset-0 garden-mist opacity-80" aria-hidden="true" />
          <FireflyField count={immersive ? 22 : 14} className="opacity-90" />
          <div className="absolute inset-0 glass-pane" aria-hidden="true" />
          <MoonGlow className="-top-28 right-[10%] w-[22rem] h-[22rem]" tone="rgba(232,212,168,0.07)" />
          <SparkleField count={6} className="opacity-30" />

          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div
              ref={stageRef}
              className="relative w-[min(92vw,62rem)] will-change-transform"
              style={{ transformOrigin: 'center center' }}
              initial={false}
              animate={{
                scale: immersive ? (fading ? bloomScale * 1.05 : bloomScale) : 1,
              }}
              transition={{
                duration: fading ? FADE_MS / 1000 : 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/*
                Hollow frame: soft-frame ONLY as padding band around the video well.
                Center is always the dark video — never a solid gradient fill.
              */}
              <div
                className={`relative ${immersive ? '' : 'soft-frame shadow-princess-lg'}`}
                style={{
                  padding: immersive ? 0 : 6,
                  borderRadius: immersive ? 0 : 5,
                  transition: 'padding 1.8s cubic-bezier(0.22,1,0.36,1), border-radius 1.8s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10"
                  aria-hidden="true"
                  initial={false}
                  animate={{ opacity: immersive ? 0 : 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-[2px] rounded-[0.25rem] border border-champagne/40" />
                  <div className="absolute inset-[4px] rounded-[0.2rem] border border-gold-dark/35" />
                  <CornerFlourish className="absolute -top-2 -left-2 w-9 h-9 sm:w-10 sm:h-10 opacity-90" tone="#E8D4A8" />
                  <CornerFlourish className="absolute -top-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 -scale-x-100 opacity-90" tone="#E8D4A8" />
                  <CornerFlourish className="absolute -bottom-2 -left-2 w-9 h-9 sm:w-10 sm:h-10 -scale-y-100 opacity-90" tone="#E8D4A8" />
                  <CornerFlourish className="absolute -bottom-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 -scale-100 opacity-90" tone="#E8D4A8" />
                </motion.div>

                <div
                  className="relative aspect-video w-full overflow-hidden bg-[#0B0A14]"
                  style={{
                    borderRadius: immersive ? 0 : 3,
                    transition: 'border-radius 1.8s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                    src={INTRO_SRC}
                    onCanPlay={handleCanPlay}
                    onPlaying={handlePlaying}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                    onError={handleError}
                    aria-hidden="true"
                  />

                  {showSpinner && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0B0A14]/75">
                      <div className="w-10 h-10 rounded-full border-2 border-champagne/30 border-t-champagne animate-spin" />
                    </div>
                  )}

                  <AnimatePresence>
                    {needsTap && phase !== 'error' && !immersive && (
                      <motion.button
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={handleTapToPlay}
                        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 px-8 py-3 rounded-full bg-[#16122a]/90 text-night text-sm tracking-widest uppercase hover:bg-royal/90 transition-colors border border-champagne/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                      >
                        Xem intro
                      </motion.button>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {phase === 'error' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#0B0A14]/95 px-6 text-center"
                      >
                        <p className="font-script text-3xl text-champagne">Câu chuyện sắp mở…</p>
                        <p className="text-night/70 text-sm max-w-xs">
                          Video giới thiệu chưa thể phát. Bạn vẫn có thể bước vào trang câu chuyện.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                          <button
                            onClick={handleRetry}
                            className="px-6 py-2.5 rounded-full border border-champagne/50 text-champagne text-xs tracking-widest-story uppercase hover:bg-royal/80 transition-colors"
                          >
                            Thử lại
                          </button>
                          <button
                            onClick={skip}
                            className="px-6 py-2.5 rounded-full bg-gradient-to-br from-champagne to-gold text-[#3A2A1E] text-xs tracking-widest-story uppercase hover:brightness-110 transition-all"
                          >
                            Vào trang ngay
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-[5]"
            aria-hidden="true"
            initial={false}
            animate={{
              opacity: immersive ? 1 : 0,
              background: fading
                ? 'radial-gradient(circle at 50% 50%, rgba(7,9,18,0.2) 0%, rgba(7,9,18,1) 75%)'
                : 'radial-gradient(ellipse at 50% 55%, transparent 28%, rgba(7,9,18,0.15) 55%, rgba(7,9,18,0.5) 100%)',
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {phase !== 'error' && !fading && (
            <button
              onClick={skip}
              className={`absolute top-6 right-6 z-20 px-5 py-2 rounded-full border border-champagne/40 bg-[#16122a]/78 text-champagne text-xs tracking-widest-story uppercase backdrop-blur-sm hover:bg-royal/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                immersive ? 'opacity-30 hover:opacity-90' : ''
              }`}
            >
              Bỏ qua
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Intro
