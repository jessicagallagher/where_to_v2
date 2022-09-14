/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        greenDefault: '#8ee000',
        greenLight: '#bff199',
        teal: '#14d4f4',
        greyDefault: '#4c4c4c',
        greyLight: '#cfcfcf',
        purple: '#8549ba',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
