/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#f5a442' ,
          200:'#f57e42' ,
          300: '#f57242' ,
          400: '',
        }
      }
    },
  },
  plugins: [],
}

