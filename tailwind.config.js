/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00C853',
        'brand-dark': '#00a844',
        dark: '#031412',
        'dark-card': '#0a1f1a',
        'dark-border': '#1e332d',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
        sora:    ['Sora', 'sans-serif'],
        outfit:  ['Outfit', 'sans-serif'],
      },
      animation: {
        heroFadeUp: 'heroFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards',
        pulse2: 'pulse 1s cubic-bezier(0.4,0,0.6,1) infinite',
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
