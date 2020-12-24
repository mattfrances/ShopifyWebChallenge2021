const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
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
    },
  },
  plugins: [require('tailwindcss-truncate-multiline')()],
};
