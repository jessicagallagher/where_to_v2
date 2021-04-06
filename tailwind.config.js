module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          '100': '#8ee000'
        },
        teal: {
          '100': '#14d4f4'
        },
        purple: {
          '100': '#8549ba'
        },
        dkGrey: {
          '100': '#4c4c4c'
        },
        mdGrey: {
          '100': '#6f6f6f'
        },
        ltGrey: {
          '100': '#cfcfcf'
        },
        notWhite: {
          '100': '#f0f0f0'
        },
        ltLime: {
          '100': '#bff199'
        },
        ltPink: {
          '100': '#f7c8c9'
        }
      },
      fontFamily: {
        'main': ['Roboto Condensed', 'sans-serif'],
        'accent': ['Open Sans Condensed', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-debug-screens")]
}
