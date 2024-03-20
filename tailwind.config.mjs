/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '.box-shadow: 0px -10px 30px 0px rgba(0,0,0,.1)'
      },
      colors: {
        primary: '#5b6067',
        secondary: '#01006b',
        accent: '#005cd4'
      },
      fontFamily: {
        heading: ['Orpheus Pro', 'sans-serif'],
        p: ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('assets/logo.jpeg')",
        map: 'url("assets/map_bg.webp")',
        banner: 'url("assets/Croisiere-Antartica.webp")'
      }
    }
  },
  plugins: []
}
