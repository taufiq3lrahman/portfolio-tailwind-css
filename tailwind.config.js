/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        utama: '#0284c7',
        pendukung1: '#64748b',
        gelap: '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

