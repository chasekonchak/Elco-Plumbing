/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0F1117',
          surface: '#181C27',
          card: '#1E2330',
          border: '#2A3040',
          amber: '#F59E0B',
          'amber-light': '#FCD34D',
          'amber-dark': '#D97706',
          slate: '#94A3B8',
          muted: '#4B5563',
          white: '#F8FAFC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
