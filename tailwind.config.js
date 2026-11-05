/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/components_corrupted_ignore/**",
    "!./src/components_corrupted/**",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Disney-princess midnight — pearl gold, blush, lavender mist
        midnight: '#0A0B14',
        navy: '#131525',
        royal: '#1C2238',
        moon: '#2A3350',
        gold: '#D4B87A',          // soft pearl gold (less harsh)
        champagne: '#E8D4A8',     // soft champagne highlight
        'gold-pale': '#F0E6C8',
        rose: '#C48A9E',          // muted blush rose
        pink: '#E0A8BA',          // soft princess pink
        lavender: '#B8AAD0',      // soft lavender mist
        ivory: '#F9F3E8',         // soft ivory parchment
        cream: '#F0E6D6',
        'cream-dark': '#E4D5C4',
        ink: '#534038',           // softer brown ink
        night: '#F2EFF6',         // soft white on dark
        // Legacy aliases
        petal: '#E0A8BA',
        'petal-soft': '#F0D0DC',
        sky: '#B8CDE0',
        'sky-dark': '#8FA8C0',
        lilac: '#B8AAD0',
        'gold-dark': '#B89A5E',
        bronze: '#7A5C48',
        'soft-beige': '#F0E6D6',
        'soft-beige-dark': '#E4D5C4',
        'sea-blue': {
          dark: '#534038',
          primary: '#C48A9E',
          light: '#B8AAD0',
        },
        primary: '#C48A9E',
        secondary: '#7A5C48',
        dark: '#0A0B14',
        light: '#F9F3E8',
        white: '#FDFBF8',
      },
      fontFamily: {
        // Royal manuscript headings — EB Garamond (full Vietnamese)
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        // Chapter / flourish script — Great Vibes (full Vietnamese)
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        // Body & nav UI — Source Sans 3 (full Vietnamese)
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-story': '0.35em',
      },
      borderRadius: {
        // Royal gallery frames — nearly rectangular, not pill-soft
        soft: '0.5rem',
        softer: '0.625rem',
        royal: '0.375rem',
        pill: '9999px',
      },
      boxShadow: {
        princess: '0 18px 50px rgba(60,30,55,0.35), 0 0 40px rgba(224,168,186,0.08)',
        'princess-lg': '0 28px 70px rgba(40,20,50,0.45), 0 0 55px rgba(232,212,168,0.12)',
        glow: '0 0 28px rgba(232,212,168,0.25), 0 0 60px rgba(224,168,186,0.12)',
        royal: '0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,212,168,0.2), inset 0 1px 0 rgba(255,248,230,0.35)',
        'royal-lg': '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(232,212,168,0.25), inset 0 1px 0 rgba(255,248,230,0.4)',
      },
    },
  },
  plugins: [],
}
