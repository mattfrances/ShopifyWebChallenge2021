const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      minWidth: {
        24: '6rem',
      },
    },
    truncate: {
      lines: {
        3: '3',
        5: '5',
        8: '8',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      textColor: ['dark', 'responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    },
  },
  plugins: [require('tailwindcss-truncate-multiline')()],
};
