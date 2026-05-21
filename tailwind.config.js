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
          red: '#C8102E',
          'red-dark': '#A00D24',
          navy: '#0D1B2A',
          'navy-light': '#152436',
          white: '#FFFFFF',
          gray: '#F5F7FA',
          'gray-mid': '#E8EDF2',
          'text-muted': '#6B7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
