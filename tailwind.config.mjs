/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'draw-border': 'draw-border 0.5s ease-in-out forwards',
        'grow-width': 'grow-width 0.5s ease-in-out infinite',
        raise: 'raise 0.5s ease-in-out infinite'
      },
      keyframes: {
        'draw-border': {
          '0%': { width: '0%', transform: 'translateX(-100%)' },
          '100%': { width: '100%', transform: 'translateX(0)' }
        },
        'grow-width': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        raise: {
          '0%, 100%': { transform: 'rotateX(0)' },
          '50%': { transform: 'rotateX(50px)' }
        }
      },
      translate: {
        'z-0': '0',
        'z-10': '10px',
        'z-20': '20px',
        'z-30': '30px',
        'z-40': '40px',
        'z-50': '50px'
      },
      rotate: {
        'y-180': 'rotateY(180deg)'
      },
      boxShadow: {
        DEFAULT: '.box-shadow: 0px -10px 30px 0px rgba(0,0,0,.1)'
      },
      colors: {
        primary: '#5b6067',
        secondary: '#01006b',
        accent: '#005cd4'
      },
      fontFamily: {
        heading: ['Enriqueta', 'sans-serif'],
        p: ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('assets/logo.jpeg')",
        map: 'url("assets/map_bg.webp")',
        banner: 'url("assets/Croisiere-Antartica.webp")',
        footer: 'url("assets/footer.webp")'
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`
          }) // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ]
}
