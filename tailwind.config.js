module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
       }
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
    },
  },
  plugins: [],
}
