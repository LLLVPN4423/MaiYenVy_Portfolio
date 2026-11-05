import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { RoyalCrest } from './decor/Ornaments'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const reduceMotion = useReducedMotion()

  const navItems = [
    { id: 'home', name: 'Trang chủ', href: '#home' },
    { id: 'about', name: 'Giới thiệu', href: '#about' },
    { id: 'experience', name: 'Kinh nghiệm', href: '#experience' },
    { id: 'portfolio', name: 'Dự án', href: '#portfolio' },
    { id: 'contact', name: 'Liên hệ', href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-champagne/30 shadow-[0_1px_0_rgba(224,168,186,0.2),0_10px_36px_rgba(40,20,50,0.4)]'
          : 'bg-gradient-to-b from-[#0A0B14]/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark + crest */}
          <a href="#home" className="group flex items-center gap-3">
            <RoyalCrest className="w-7 h-8 opacity-85 group-hover:opacity-100 transition-opacity" />
            <span className="flex flex-col leading-none">
              <span className="font-script text-2xl text-champagne group-hover:text-ivory transition-colors">
                Yến Vy
              </span>
              <span className="font-display text-[9px] tracking-widest-story uppercase text-pink/70 mt-0.5">
                Royal Portfolio
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item, index) => {
              const isActive = active === item.id
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.06, duration: 0.5 }}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative font-sans text-[13px] tracking-wide transition-colors duration-300 pb-1 ${
                    isActive ? 'text-champagne' : 'text-night/70 hover:text-champagne'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 ${
                      isActive ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2'
                    }`}
                    aria-hidden="true"
                  />
                </motion.a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-night hover:text-champagne transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-navy/95 backdrop-blur-md border-t border-gold/40 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block font-display text-xl py-2.5 border-b border-gold/15 last:border-0 transition-colors ${
                      isActive ? 'text-champagne' : 'text-night/80 hover:text-champagne'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
