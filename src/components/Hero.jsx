import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import {
  AntiquePhotoFrame, CrownMark, NightBackdrop,
  DriftingPetals, RoyalCrest, CardOrnament, RoyalButton, StorybookPage,
} from './decor/Ornaments'

const PORTRAIT_SRC = `${import.meta.env.BASE_URL}portrait.jpg`

const Hero = ({ introComplete = true }) => {
  const reduceMotion = useReducedMotion()
  const ready = introComplete

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: d, ease: 'easeOut' },
    }),
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Midnight royal atmosphere */}
      <NightBackdrop castle glass>
        <DriftingPetals count={2} className="opacity-30" />
      </NightBackdrop>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 items-center">
          {/* Portrait — antique royal photo frame */}
          <motion.div
            initial={reduceMotion || !ready ? false : { opacity: 0, scale: 0.94 }}
            animate={ready ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="mx-auto w-full max-w-sm"
          >
            <AntiquePhotoFrame className="shadow-royal-lg">
              <div className="aspect-[3/4] overflow-hidden rounded-[0.15rem]">
                <img
                  src={PORTRAIT_SRC}
                  alt="Chân dung Mai Yến Vy"
                  className="w-full h-full object-cover"
                />
              </div>
            </AntiquePhotoFrame>
            <p className="mt-4 text-center font-script text-2xl text-champagne/80">
              câu chuyện của tôi
            </p>
          </motion.div>

          {/* Opening page of the storybook — shared parchment material */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion || !ready ? false : 'hidden'}
            animate={ready ? 'show' : 'hidden'}
            custom={0.15}
            className="mx-auto lg:mx-0 w-full max-w-2xl"
          >
            <StorybookPage>
            <div className="relative px-7 py-10 sm:px-12 sm:py-14 text-center">
              <RoyalCrest className="mx-auto w-12 h-14 mb-5 opacity-90" />
              <CrownMark className="mx-auto w-16 h-auto mb-4 text-gold" />

              <motion.p
                variants={fadeUp}
                initial={reduceMotion || !ready ? false : 'hidden'}
                animate={ready ? 'show' : 'hidden'}
                custom={0.3}
                className="font-script text-3xl sm:text-4xl text-bronze mb-3"
              >
                Xin chào, tôi là
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial={reduceMotion || !ready ? false : 'hidden'}
                animate={ready ? 'show' : 'hidden'}
                custom={0.42}
                className="font-display text-5xl sm:text-6xl font-semibold text-ink leading-[1.05] mb-3"
              >
                Mai Yến Vy
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial={reduceMotion || !ready ? false : 'hidden'}
                animate={ready ? 'show' : 'hidden'}
                custom={0.52}
                className="font-sans text-sm sm:text-base tracking-[0.2em] uppercase text-bronze/80 mb-6"
              >
                Văn hóa học &amp; Báo chí
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial={reduceMotion || !ready ? false : 'hidden'}
                animate={ready ? 'show' : 'hidden'}
                custom={0.62}
              >
                <CardOrnament className="mb-6" />
                <blockquote>
                  <p className="font-display italic text-xl sm:text-2xl text-ink/85 leading-relaxed">
                    "Đam mê văn hóa ẩm thực, tỉ mỉ trong từng nguyên liệu"
                  </p>
                  <footer className="mt-3 font-script text-xl text-rose/80">
                    — triết lý của tôi
                  </footer>
                </blockquote>
                <CardOrnament className="mt-6" />
              </motion.div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
                <RoyalButton variant="gold" href="#portfolio" className="!rounded-full">
                  Mở cuốn sách
                  <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </RoyalButton>
                <RoyalButton variant="parchment" href="#contact" className="!rounded-full">
                  Lời mời hoàng gia
                </RoyalButton>
              </div>
            </div>
            </StorybookPage>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {ready && (
        <motion.a
          href="#about"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-champagne/60 hover:text-champagne transition-colors z-10"
          aria-label="Cuộn xuống phần giới thiệu"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            <ArrowDown size={22} strokeWidth={1.5} />
          </motion.div>
        </motion.a>
      )}
    </section>
  )
}

export default Hero
