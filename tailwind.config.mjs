/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '.box-shadow: 0px -10px 30px 0px rgba(0,0,0,.1)'
      },
      colors: {
        secondary: '#01006b'
      },
      fontFamily: {
        heading: ['Orpheus Pro', 'sans-serif'],
        p: ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('assets/logo.jpeg')"
      }
    }
  },
  plugins: []
}
