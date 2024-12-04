/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'inter': ["Inter", 'sans-serif'],
      'libre': ["Libre Baskerville", 'serif']
    },
    fontSize: {
      'tiny': '0.875rem',
      'sm': '1rem',
      'md': '1.25rem',
      'md2': '1.5rem',
      'lg': '2rem',
      'xl': '2.25rem',
      '2xl': '3rem',
    },
    colors: {
      'white': '#ffffff',
      'red': '#DE252C',
      'bordo': '#C52C2C',
      'grey': '#E0E0E0',
      'darkgrey': '#36330',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}


