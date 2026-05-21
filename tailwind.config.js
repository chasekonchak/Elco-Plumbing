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
          bg: '#070810',
          surface: '#0C0D18',
          card: '#10121F',
          border: '#1A1E30',
          amber: '#F59E0B',
          'amber-light': '#FCD34D',
          'amber-dark': '#D97706',
          slate: '#8B9FC7',
          muted: '#3D4B66',
          white: '#EEF2FF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
