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
        // New color palette
        white: '#FFFFFF',
        'soft-beige': '#FAF9F6',
        'soft-beige-dark': '#F5EFED',
        'sea-blue': {
          dark: '#1D3557',  // Text chính, headings
          primary: '#457B9D',  // Nút bấm, hover
          light: '#A8DADC',  // Accent nhẹ
        },
        // Keep old colors for compatibility
        primary: '#457B9D',
        secondary: '#1D3557',
        dark: '#1D3557',
        light: '#FAF9F6',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
