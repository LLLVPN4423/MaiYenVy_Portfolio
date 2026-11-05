import React from 'react'
import { motion } from 'framer-motion'

/**
 * Midnight Royal Fairytale decorative primitives.
 * Antique storybook paper × midnight royal palace.
 * Inline SVG + CSS textures only; all motion respects prefers-reduced-motion.
 */

const GOLD = '#D4B87A'
const GOLD_DEEP = '#B89A5E'
const CHAMPAGNE = '#E8D4A8'

/* ===================== DIVIDERS & HEADINGS ===================== */

// Elegant horizontal divider: line — diamond — line
export const OrnamentDivider = ({ className = '', tone = 'gold' }) => {
  const line = tone === 'ivory' ? 'rgba(237,234,242,0.6)' : tone === 'dark' ? GOLD_DEEP : GOLD
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-24" style={{ backgroundColor: line, opacity: 0.6 }} />
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke={line} strokeWidth="1" opacity="0.9" />
        <circle cx="9" cy="9" r="1.8" fill={line} opacity="0.9" />
      </svg>
      <span className="h-px w-16 sm:w-24" style={{ backgroundColor: line, opacity: 0.6 }} />
    </div>
  )
}

// Section heading — tone 'light' for dark surfaces, 'dark' for parchment
export const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className = '', tone = 'light' }) => {
  const dark = tone === 'dark'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`${align === 'center' ? 'text-center' : 'text-left'} mb-14 ${className}`}
    >
      {eyebrow && (
        <p className={`font-script text-2xl sm:text-3xl mb-1 ${dark ? 'text-rose/80' : 'text-pink/80'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl sm:text-5xl font-semibold tracking-wide ${dark ? 'text-ink' : 'text-champagne'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base tracking-wide ${dark ? 'text-bronze/70' : 'text-night/60'}`}>
          {subtitle}
        </p>
      )}
      <OrnamentDivider className="mt-5" tone={dark ? 'dark' : 'gold'} />
    </motion.div>
  )
}

// Royal section heading — adds a small crown/crest above the eyebrow
export const RoyalSectionHeading = (props) => (
  <div>
    <RoyalCrest className="mx-auto mb-4 w-10 h-10 opacity-90" />
    <SectionHeading {...props} />
  </div>
)

/* ===================== ORNAMENTS ===================== */

// Rococo corner flourish — scrolling vine with leaf tips and a rose bud
export const CornerFlourish = ({ className = '', tone = GOLD }) => (
  <svg viewBox="0 0 64 64" fill="none" className={`pointer-events-none ${className}`} aria-hidden="true">
    <path
      d="M6 58 C6 32 10 14 26 9 C36 6 46 11 46 19 C46 24 41 26 37 22 C32 17 24 21 24 30 C24 43 33 50 48 50 C55 50 58 55 58 58"
      stroke={tone} strokeWidth="1.1" strokeLinecap="round"
    />
    <path d="M13 58 C13 38 17 24 27 19" stroke={tone} strokeWidth="0.7" strokeLinecap="round" opacity="0.55" />
    <path d="M26 9 C22 4 26 1 30 4 C28 8 26 9 26 9Z" fill={tone} opacity="0.75" />
    <path d="M17 21 C12 18 11 22 14 25 C17 24 18 22 17 21Z" fill={tone} opacity="0.6" />
    <circle cx="27" cy="15" r="2.6" fill={tone} opacity="0.85" />
    <circle cx="27" cy="15" r="1" fill="#F5EBDD" opacity="0.9" />
  </svg>
)

// Original royal crest — crown over shield, line-art gold
export const RoyalCrest = ({ className = '' }) => (
  <svg viewBox="0 0 48 56" fill="none" className={className} aria-hidden="true">
    {/* crown */}
    <path d="M10 18 L8 8 L16 13 L24 4 L32 13 L40 8 L38 18 Z" stroke={GOLD} strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="8" cy="7" r="1.6" fill={GOLD} />
    <circle cx="24" cy="3" r="1.8" fill={CHAMPAGNE} />
    <circle cx="40" cy="7" r="1.6" fill={GOLD} />
    {/* shield */}
    <path d="M24 22 C18 22 12 24 10 26 L10 38 C10 46 16 52 24 54 C32 52 38 46 38 38 L38 26 C36 24 30 22 24 22 Z" stroke={GOLD} strokeWidth="1.4" />
    <path d="M24 26 C20 26 16 27 15 28 L15 37 C15 43 19 47 24 48 C29 47 33 43 33 37 L33 28 C32 27 28 26 24 26 Z" stroke={GOLD} strokeWidth="0.8" opacity="0.6" />
    {/* star inside */}
    <path d="M24 32 L25.5 35.5 L29 36 L25.5 37.5 L24 41 L22.5 37.5 L19 36 L22.5 35.5 Z" fill={CHAMPAGNE} opacity="0.9" />
  </svg>
)

// Small crown mark for hero/letter accents
export const CrownMark = ({ className = '', tone = CHAMPAGNE }) => (
  <svg viewBox="0 0 64 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 20 L6 10 L16 15 L32 4 L48 15 L58 10 L58 20 Z" stroke={tone} strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="6" cy="8" r="2" fill={tone} />
    <circle cx="32" cy="3" r="2.4" fill={tone} />
    <circle cx="58" cy="8" r="2" fill={tone} />
    <path d="M4 22 L60 22" stroke={tone} strokeWidth="1" opacity="0.6" />
  </svg>
)

// Castle silhouette — original generic royal skyline for backgrounds
export const CastleSilhouette = ({ className = '', tone = '#10182B', opacity = 0.55 }) => (
  <svg
    viewBox="0 0 800 220"
    preserveAspectRatio="xMidYMax slice"
    className={`pointer-events-none ${className}`}
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      fill={tone}
      d="M0 220 L0 150 L40 150 L40 120 L60 120 L60 150 L90 150 L90 100 L110 100 L110 80 L118 60 L126 80 L126 100 L146 100 L146 150 L180 150 L180 130 L200 130 L200 150 L240 150 L240 90 L258 90 L258 70 L266 50 L274 70 L274 90 L292 90 L292 150 L330 150 L330 140 L360 140 L360 110 L368 110 L368 90 L380 90 L380 140 L400 140 L400 120 L420 120 L420 150 L470 150 L470 130 L490 130 L490 110 L498 110 L498 90 L510 90 L510 130 L530 130 L530 150 L580 150 L580 100 L600 100 L600 80 L608 58 L616 80 L616 100 L636 100 L636 150 L680 150 L680 130 L700 130 L700 150 L800 150 L800 220 Z"
    />
    {/* tiny lit windows */}
    <g fill={CHAMPAGNE} opacity="0.5">
      <rect x="112" y="88" width="3" height="5" rx="1" />
      <rect x="252" y="78" width="3" height="5" rx="1" />
      <rect x="374" y="98" width="3" height="5" rx="1" />
      <rect x="492" y="118" width="3" height="5" rx="1" />
      <rect x="594" y="88" width="3" height="5" rx="1" />
      <rect x="604" y="88" width="3" height="5" rx="1" />
    </g>
  </svg>
)

/* ===================== PAPER / ROYAL FRAME MATERIALS ===================== */
/*
 * Visual language (researched): nested gilt frame + inner mat (gallery CSS),
 * vintage rectangular gold picture frames, double/triple engraved rails.
 * Corners stay nearly square (royal/regency) — not pill-soft.
 */

// AntiqueParchment — royal paper surface
export const AntiqueParchment = ({ children, className = '' }) => (
  <div className={`parchment paper-grain paper-edge rounded-royal ${className}`}>
    {children}
  </div>
)

// RoyalManuscript — parchment in a slim gilt rail with corner flourishes
export const RoyalManuscript = ({ children, className = '' }) => (
  <div className={`relative parchment paper-grain rounded-royal border border-champagne/50 shadow-royal ${className}`}>
    <div className="absolute inset-[3px] border border-gold-dark/35 rounded-[0.2rem] pointer-events-none royal-rail" aria-hidden="true" />
    <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 -scale-x-100 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 -scale-y-100 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 -scale-100 opacity-85" tone={CHAMPAGNE} />
    <div className="relative">{children}</div>
  </div>
)

// StorybookPage — manuscript page in a slim royal frame
export const StorybookPage = ({ children, className = '' }) => (
  <div className={`relative parchment paper-grain paper-edge rounded-royal border border-champagne/50 shadow-royal-lg ${className}`}>
    <div className="absolute inset-[3px] border border-gold-dark/30 rounded-[0.2rem] pointer-events-none" aria-hidden="true" />
    <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 opacity-85" tone={GOLD} />
    <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 -scale-x-100 opacity-85" tone={GOLD} />
    <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 -scale-y-100 opacity-85" tone={GOLD} />
    <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 -scale-100 opacity-85" tone={GOLD} />
    <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" aria-hidden="true" />
    <div className="relative">{children}</div>
  </div>
)

// RoyalLetter — invitation panel with slim gilt rails
export const RoyalLetter = ({ children, className = '' }) => (
  <div className={`relative parchment paper-grain paper-edge rounded-royal border border-champagne/50 shadow-royal ${className}`}>
    <div className="absolute inset-[3px] border border-gold-dark/30 rounded-[0.2rem] pointer-events-none" aria-hidden="true" />
    <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 -scale-x-100 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 -scale-y-100 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 -scale-100 opacity-85" tone={CHAMPAGNE} />
    <div className="relative">{children}</div>
  </div>
)

// IllustratedPaperFrame — slim gallery frame + ivory mat
export const IllustratedPaperFrame = ({ children, className = '' }) => (
  <div className={`relative royal-frame p-1 sm:p-1.5 shadow-royal ${className}`}>
    <div className="absolute inset-[2px] border border-champagne/35 rounded-[0.22rem] pointer-events-none" aria-hidden="true" />
    <CornerFlourish className="absolute -top-1.5 -left-1.5 w-7 h-7 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -top-1.5 -right-1.5 w-7 h-7 -scale-x-100 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-7 h-7 -scale-y-100 opacity-85" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-7 h-7 -scale-100 opacity-85" tone={CHAMPAGNE} />
    <div className="relative rounded-[0.15rem] border border-[#2A1F16]/30 bg-[#F8F1E3] p-0.5 overflow-hidden">{children}</div>
  </div>
)

// AntiquePhotoFrame — slim ornate gilt portrait frame
export const AntiquePhotoFrame = ({ children, className = '' }) => (
  <div className={`relative p-1 sm:p-1.5 royal-frame shadow-royal-lg ${className}`}>
    <div className="absolute inset-[2px] rounded-[0.22rem] border border-champagne/40 pointer-events-none" aria-hidden="true" />
    <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 opacity-90" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 -scale-x-100 opacity-90" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 -scale-y-100 opacity-90" tone={CHAMPAGNE} />
    <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 -scale-100 opacity-90" tone={CHAMPAGNE} />
    <div className="relative rounded-[0.15rem] border border-[#2A1F16]/50 bg-[#F5EBDD] p-0.5 overflow-hidden">{children}</div>
  </div>
)

// Double-rule royal frame — transparent center
export const StorybookFrame = ({ children, className = '', innerClassName = '', surface = 'night' }) => (
  <div className={`relative ${className}`}>
    <div
      className={`absolute inset-0 border rounded-royal ${surface === 'night' ? 'border-champagne/40' : 'border-champagne/50'}`}
      aria-hidden="true"
    />
    <div
      className={`absolute inset-[3px] border rounded-[0.2rem] ${surface === 'night' ? 'border-gold-dark/25' : 'border-gold-dark/35'}`}
      aria-hidden="true"
    />
    <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 z-10 opacity-85" tone={surface === 'night' ? CHAMPAGNE : GOLD} />
    <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 z-10 -scale-x-100 opacity-85" tone={surface === 'night' ? CHAMPAGNE : GOLD} />
    <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 z-10 -scale-y-100 opacity-85" tone={surface === 'night' ? CHAMPAGNE : GOLD} />
    <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 z-10 -scale-100 opacity-85" tone={surface === 'night' ? CHAMPAGNE : GOLD} />
    <div className={`relative ${innerClassName}`}>{children}</div>
  </div>
)

// RoyalPanel — slim framed information panel
export const RoyalPanel = ({ children, className = '', icon: Icon = null, title, surface = 'parchment' }) => {
  const isNight = surface === 'night'
  return (
    <div
      className={`relative rounded-royal ${
        isNight
          ? 'bg-royal/80 border border-champagne/35 shadow-royal'
          : 'parchment paper-grain paper-edge border border-champagne/50 shadow-royal'
      } ${className}`}
    >
      <div className={`absolute inset-[3px] border rounded-[0.2rem] pointer-events-none ${isNight ? 'border-champagne/15' : 'border-gold-dark/30'}`} aria-hidden="true" />
      <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 opacity-85" tone={isNight ? CHAMPAGNE : GOLD} />
      <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 -scale-x-100 opacity-85" tone={isNight ? CHAMPAGNE : GOLD} />
      <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 -scale-y-100 opacity-85" tone={isNight ? CHAMPAGNE : GOLD} />
      <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 -scale-100 opacity-85" tone={isNight ? CHAMPAGNE : GOLD} />
      {title && (
        <div className="relative flex items-center gap-3 px-5 pt-5 sm:px-7 sm:pt-6">
          {Icon && (
            <span className={`p-1.5 rounded-royal border shadow-inner ${isNight ? 'bg-moon/40 border-champagne/40 text-champagne' : 'bg-gold/15 border-champagne/50 text-bronze'}`}>
              <Icon size={16} strokeWidth={1.5} />
            </span>
          )}
          <h3 className={`font-display text-2xl font-semibold ${isNight ? 'text-champagne' : 'text-ink'}`}>{title}</h3>
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  )
}

// Ornamental medallion
export const Medallion = ({ children, className = '', night = false }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full border shadow-[0_2px_12px_rgba(80,40,70,0.25)] ${
      night ? 'border-champagne/45 bg-gradient-to-br from-royal to-moon' : 'border-champagne/50 bg-gradient-to-br from-ivory to-cream'
    } ${className}`}
    aria-hidden="true"
  >
    {children}
  </span>
)

// Botanical sprig
export const BotanicalSprig = ({ className = '', flip = false, tone = '#C6A15B' }) => (
  <svg viewBox="0 0 40 120" fill="none" className={`${flip ? '-scale-x-100' : ''} ${className}`} aria-hidden="true">
    <path d="M20 116 C18 80 22 44 20 8" stroke={tone} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    {[24, 40, 56, 72, 88].map((y, i) => (
      <g key={y} opacity={0.65 - i * 0.08}>
        <path
          d={`M20 ${y} C ${i % 2 ? 8 : 32} ${y - 6}, ${i % 2 ? 8 : 32} ${y + 6}, 20 ${y + 10}`}
          stroke={tone} strokeWidth="0.9" fill="none" strokeLinecap="round"
        />
        <circle cx={i % 2 ? 12 : 28} cy={y + 5} r="1.4" fill={GOLD} opacity="0.85" />
      </g>
    ))}
    <circle cx="20" cy="6" r="2.4" fill={GOLD} opacity="0.9" />
  </svg>
)

/**
 * EnchantedBeanstalk — Jack-and-the-Beanstalk vine for the experience timeline.
 * Tall climbing stem with curling tendrils, leaves, and glowing golden beans.
 * Stretches to fill its container height (preserveAspectRatio none on Y).
 */
export const EnchantedBeanstalk = ({ className = '', nodes = 5 }) => {
  const leafYs = React.useMemo(() => {
    const list = []
    for (let i = 0; i < Math.max(nodes * 3, 10); i += 1) {
      list.push(8 + (i * 84) / Math.max(nodes * 3 - 1, 1))
    }
    return list
  }, [nodes])

  const beanYs = React.useMemo(() => {
    // Align roughly with timeline cards (spread along the stalk)
    return Array.from({ length: nodes }, (_, i) => 12 + (i * 76) / Math.max(nodes - 1, 1))
  }, [nodes])

  return (
    <svg
      viewBox="0 0 64 100"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beanstalk-stem" x1="0" y1="100" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3D6B45" />
          <stop offset="40%" stopColor="#5F9A5A" />
          <stop offset="75%" stopColor="#8BC47A" />
          <stop offset="100%" stopColor="#C6E6A0" />
        </linearGradient>
        <linearGradient id="beanstalk-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0E6C8" />
          <stop offset="55%" stopColor="#D4B87A" />
          <stop offset="100%" stopColor="#B89A5E" />
        </linearGradient>
      </defs>

      {/* Soft golden spine behind the vine (timeline glow) */}
      <path
        d="M32 98 C30 78 34 58 31 40 C29 26 34 14 32 2"
        stroke="url(#beanstalk-gold)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
      />

      {/* Main climbing stem */}
      <path
        d="M32 99
           C 28 90, 36 82, 30 74
           C 24 66, 38 58, 33 50
           C 27 42, 36 34, 31 26
           C 26 18, 35 12, 32 4
           C 30 1, 32 0, 32 0"
        stroke="url(#beanstalk-stem)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.92"
      />
      {/* Secondary thinner tendril */}
      <path
        d="M33 99 C 38 88, 26 78, 34 68 C 42 58, 28 48, 35 38 C 41 28, 29 18, 33 8"
        stroke="#6FA86A"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Leaves + curling tendrils */}
      {leafYs.map((y, i) => {
        const left = i % 2 === 0
        const ox = left ? -1 : 1
        const tipX = 32 + ox * (14 + (i % 3) * 3)
        const midX = 32 + ox * (7 + (i % 2) * 2)
        return (
          <g key={`leaf-${i}`} opacity={0.75 - (i % 4) * 0.06}>
            {/* leaf blade */}
            <path
              d={`M32 ${y} Q ${midX} ${y - 3}, ${tipX} ${y - 1.5} Q ${midX} ${y + 3.5}, 32 ${y}`}
              fill="#5F9A5A"
              opacity="0.7"
            />
            <path
              d={`M32 ${y} Q ${midX} ${y - 2}, ${tipX} ${y - 1}`}
              stroke="#A8D48A"
              strokeWidth="0.4"
              fill="none"
              opacity="0.8"
            />
            {/* tiny curl */}
            <path
              d={`M${tipX} ${y - 1.5} C ${tipX + ox * 3} ${y - 4}, ${tipX + ox * 2} ${y + 2}, ${tipX - ox} ${y}`}
              stroke="#8BC47A"
              strokeWidth="0.55"
              fill="none"
              opacity="0.65"
            />
          </g>
        )
      })}

      {/* Golden magical beans (timeline nodes) */}
      {beanYs.map((y, i) => (
        <g key={`bean-${i}`}>
          <ellipse cx="32" cy={y} rx="3.2" ry="2.4" fill="url(#beanstalk-gold)" opacity="0.95" />
          <ellipse cx="31" cy={y - 0.5} rx="1.1" ry="0.7" fill="#FFF8E8" opacity="0.55" />
          <ellipse
            cx={i % 2 === 0 ? 27 : 37}
            cy={y + 1.5}
            rx="1.6"
            ry="1.2"
            fill="#E8D4A8"
            opacity="0.7"
          />
        </g>
      ))}

      {/* Crown bud at the top */}
      <circle cx="32" cy="2.5" r="2.2" fill="#C6E6A0" opacity="0.9" />
      <circle cx="32" cy="2.5" r="1" fill="#F0E6C8" opacity="0.85" />
    </svg>
  )
}

/* ===================== ATMOSPHERE ===================== */

// SparkleField — tiny magical dust particles (gold by default)
export const SparkleField = ({ count = 14, className = '', tone = '#E2CA91' }) => {
  const dots = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 61 + 13) % 100}%`,
        top: `${(i * 37 + 7) % 100}%`,
        size: 1.5 + ((i * 7) % 4) * 0.7,
        delay: `${(i % 7) * 0.6}s`,
        duration: `${3.5 + (i % 5)}s`,
      })),
    [count]
  )
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full"
          style={{
            left: d.left, top: d.top, width: d.size, height: d.size,
            backgroundColor: tone, animationDelay: d.delay, animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  )
}

/**
 * FireflyField — bright golden fireflies (transform/opacity only).
 * Prefer ONE shared ambient instance (see App) instead of per-section armies.
 */
export const FireflyField = ({ count = 18, className = '' }) => {
  const flies = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const layer = i % 3
        return {
          left: `${(i * 37 + 7) % 98}%`,
          bottom: `${(i * 23 + 3) % 88}%`,
          size: layer === 0 ? 5.5 : layer === 1 ? 4 : 2.8,
          duration: `${7 + (i % 6) * 1.6}s`,
          delay: `${(i % 10) * 0.4}s`,
          color: layer === 0 ? '#FFF3C4' : layer === 1 ? '#FFE9B0' : '#F5D98A',
          glow:
            layer === 0
              ? '0 0 10px 3px rgba(255,236,170,0.95), 0 0 22px 6px rgba(255,210,120,0.45)'
              : layer === 1
                ? '0 0 8px 2px rgba(255,233,176,0.85), 0 0 16px 4px rgba(232,200,120,0.35)'
                : '0 0 6px 2px rgba(245,217,138,0.75)',
        }
      }),
    [count]
  )
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ contain: 'paint' }}
      aria-hidden="true"
    >
      {flies.map((f, i) => (
        <span
          key={i}
          className="animate-firefly absolute rounded-full"
          style={{
            left: f.left,
            bottom: f.bottom,
            width: f.size,
            height: f.size,
            backgroundColor: f.color,
            boxShadow: f.glow,
            animationDuration: f.duration,
            animationDelay: f.delay,
          }}
        />
      ))}
    </div>
  )
}

/** Fixed full-page firefly veil — mount once in App (z above section paint) */
export const AmbientFireflies = ({ count = 36 }) => (
  <div className="ambient-fireflies" aria-hidden="true">
    <FireflyField count={count} />
  </div>
)

/**
 * Original garden spirits — tiny winged night beings (not based on any copyrighted character).
 * Soft moth / petal / leaf wings + luminous body; folklore “tinh linh vườn” only.
 */
const renderSpiritMark = (variant) => {
  if (variant === 1) {
    return (
      <g>
        <ellipse className="animate-wing-flutter" cx="5" cy="12" rx="6.5" ry="4.5" fill="#E8D4A8" opacity="0.55" />
        <ellipse className="animate-wing-flutter" cx="19" cy="12" rx="6.5" ry="4.5" fill="#E8D4A8" opacity="0.55" />
        <ellipse cx="12" cy="12" rx="2.6" ry="4" fill="#FFF0C8" />
        <circle cx="12" cy="8.5" r="1.6" fill="#FFE9B0" />
      </g>
    )
  }
  if (variant === 2) {
    return (
      <g>
        <path className="animate-wing-flutter" d="M12 10 C4 4 2 12 12 16 C22 12 20 4 12 10Z" fill="#D4E8C8" opacity="0.45" />
        <circle cx="12" cy="12" r="2.8" fill="#FFF3C4" />
        <circle cx="12" cy="12" r="1.2" fill="#FFFFFF" opacity="0.85" />
      </g>
    )
  }
  return (
    <g>
      <ellipse className="animate-wing-flutter" cx="6" cy="10" rx="7" ry="3.2" fill="#F8E7B8" opacity="0.5" transform="rotate(-28 6 10)" />
      <ellipse className="animate-wing-flutter" cx="18" cy="10" rx="7" ry="3.2" fill="#F8E7B8" opacity="0.5" transform="rotate(28 18 10)" />
      <circle cx="12" cy="11" r="3.2" fill="#FFE9B0" />
      <circle cx="12" cy="11" r="1.4" fill="#FFF8E0" />
    </g>
  )
}

export const GardenSpiritField = ({ count = 5, className = '' }) => {
  const spirits = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${8 + ((i * 19 + 5) % 80)}%`,
        top: `${12 + ((i * 27 + 9) % 62)}%`,
        size: 22 + (i % 3) * 6,
        duration: `${11 + (i % 4) * 2.5}s`,
        delay: `${i * 1.4}s`,
        variant: i % 3,
      })),
    [count]
  )
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {spirits.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="animate-spirit-drift absolute"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            filter: 'drop-shadow(0 0 6px rgba(255,233,176,0.55))',
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        >
          {renderSpiritMark(s.variant)}
        </svg>
      ))}
    </div>
  )
}

/** Fixed full-page garden spirits — few, original silhouettes */
export const AmbientGardenSpirits = ({ count = 5 }) => (
  <div className="ambient-spirits" aria-hidden="true">
    <GardenSpiritField count={count} />
  </div>
)

// DriftingPetals — a few rose petals falling slowly
export const DriftingPetals = ({ count = 5, className = '' }) => {
  const petals = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 23 + 7) % 94}%`,
        size: 7 + ((i * 3) % 5),
        duration: `${14 + (i % 4) * 5}s`,
        delay: `${(i % 6) * 2.2}s`,
      })),
    [count]
  )
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 10 14"
          className="animate-petal absolute top-0"
          style={{
            left: p.left, width: p.size, height: p.size * 1.4,
            animationDuration: p.duration, animationDelay: p.delay,
          }}
        >
          <path d="M5 0 C9 3 10 8 5 14 C0 8 1 3 5 0Z" fill="#E0A8BA" opacity="0.6" />
        </svg>
      ))}
    </div>
  )
}

// MoonGlow — soft moonlight radial (kept subtle so the sky stays clear)
export const MoonGlow = ({ className = '', tone = 'rgba(232,212,168,0.08)' }) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    style={{ background: `radial-gradient(circle, ${tone}, transparent 70%)` }}
    aria-hidden="true"
  />
)

/**
 * NightBackdrop — dreamy palace garden at night (cheap CSS).
 * Fireflies default OFF here — use App-level AmbientFireflies once for performance.
 */
export const NightBackdrop = ({
  className = '',
  castle = true,
  fireflies = false,
  fireflyCount = 10,
  glass = true,
  children,
}) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ contain: 'paint' }} aria-hidden="true">
    <div className="absolute inset-0 night-sky" />
    <div className="absolute inset-0 starfield opacity-40" />
    <MoonGlow className="-top-28 right-[12%] w-[20rem] h-[20rem]" tone="rgba(232,212,168,0.08)" />
    <MoonGlow className="bottom-[10%] left-[8%] w-[16rem] h-[16rem]" tone="rgba(120,150,130,0.07)" />
    <div className="absolute inset-0 garden-mist" />
    {/* Soft garden hedge silhouette */}
    <svg
      className="absolute bottom-0 inset-x-0 h-28 w-full opacity-50"
      viewBox="0 0 800 120"
      preserveAspectRatio="none"
    >
      <path
        fill="#06100C"
        d="M0 120 L0 78 C40 62 70 88 110 70 C150 52 180 78 220 64 C270 46 300 80 350 58 C400 40 440 72 490 55 C540 38 580 70 630 52 C680 36 720 68 760 50 L800 42 L800 120 Z"
      />
      <path
        fill="#0A1610"
        opacity="0.7"
        d="M0 120 L0 92 C50 80 90 100 140 86 C200 70 240 96 300 82 C360 68 400 94 460 78 C520 64 560 90 620 76 C680 62 730 88 780 74 L800 70 L800 120 Z"
      />
    </svg>
    {castle && (
      <CastleSilhouette
        className="absolute bottom-0 inset-x-0 h-48 sm:h-56 w-full"
        tone="#070E0C"
        opacity={0.55}
      />
    )}
    {fireflies && <FireflyField count={fireflyCount} className="opacity-80" />}
    {glass && <div className="absolute inset-0 glass-pane" />}
    {children}
  </div>
)

/* ===================== SMALL ORNAMENTS ===================== */

/* ===================== STORYBOOK CONTROLS ===================== */

// RoyalButton — interactive object from the storybook.
// variant: 'gold' (champagne gradient), 'parchment' (ivory paper), 'night' (navy + gold edge)
export const RoyalButton = ({ children, className = '', variant = 'gold', href, ...props }) => {
  const styles = {
    gold: 'bg-gradient-to-br from-champagne via-gold to-pink/80 text-[#3A2A1E] border-champagne/60 shadow-glow hover:shadow-[0_12px_38px_rgba(232,212,168,0.35)] hover:-translate-y-0.5',
    parchment: 'parchment paper-grain text-ink border-champagne/50 shadow-princess hover:border-pink/45 hover:-translate-y-0.5',
    night: 'bg-royal/70 text-champagne border-champagne/35 shadow-princess hover:border-pink/40 hover:text-ivory hover:-translate-y-0.5',
  }
  const cls = `group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full border text-[13px] tracking-widest-story uppercase font-medium transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none ${styles[variant]} ${className}`
  const inner = (
    <>
      <span className="absolute inset-[3px] rounded-full border border-current opacity-[0.15] pointer-events-none" aria-hidden="true" />
      {children}
    </>
  )
  if (href) {
    return <a href={href} className={cls} {...props}>{inner}</a>
  }
  return <button className={cls} {...props}>{inner}</button>
}

// RoyalBadge — compact parchment/gold label for chapters, dates, categories
export const RoyalBadge = ({ children, className = '', night = false }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[11px] tracking-widest-story uppercase font-medium ${
      night
        ? 'bg-royal/80 border-champagne/40 text-champagne'
        : 'parchment paper-grain border-champagne/50 text-bronze shadow-sm'
    } ${className}`}
  >
    {children}
  </span>
)

/**
 * ChapterDivider — seamless scene bridge (no hard black seam).
 * Overlaps neighboring sections with a soft veil + floating crest ornament.
 */
export const ChapterDivider = ({ className = '', label }) => (
  <div
    className={`relative z-20 -my-12 sm:-my-14 h-24 sm:h-28 flex items-center justify-center pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-28 sm:h-32 chapter-blend" />
    <div className="relative flex items-center justify-center gap-3 sm:gap-4 px-4">
      <span className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-champagne/50" />
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="opacity-80">
        <circle cx="7" cy="7" r="5.5" stroke="#D4B87A" strokeWidth="1.1" />
        <circle cx="7" cy="7" r="1.6" fill="#E8D4A8" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 10 10" className="text-champagne drop-shadow-[0_0_8px_rgba(232,212,168,0.45)]">
        <path d="M5 0 L6.2 3.8 L10 5 L6.2 6.2 L5 10 L3.8 6.2 L0 5 L3.8 3.8 Z" fill="currentColor" opacity="0.85" />
      </svg>
      {label && <span className="font-script text-xl text-champagne/75 px-1">{label}</span>}
      <svg width="18" height="18" viewBox="0 0 10 10" className="text-champagne drop-shadow-[0_0_8px_rgba(232,212,168,0.45)]">
        <path d="M5 0 L6.2 3.8 L10 5 L6.2 6.2 L5 10 L3.8 6.2 L0 5 L3.8 3.8 Z" fill="currentColor" opacity="0.85" />
      </svg>
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="opacity-80">
        <circle cx="7" cy="7" r="5.5" stroke="#D4B87A" strokeWidth="1.1" />
        <circle cx="7" cy="7" r="1.6" fill="#E8D4A8" />
      </svg>
      <span className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-champagne/50" />
    </div>
  </div>
)

// Small ornamental divider inside cards
export const CardOrnament = ({ className = '', tone = GOLD }) => (
  <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
    <span className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${tone}aa)` }} />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke={tone} strokeWidth="1" opacity="0.85" />
      <circle cx="6" cy="6" r="1.4" fill={tone} opacity="0.9" />
    </svg>
    <span className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${tone}aa)` }} />
  </div>
)
