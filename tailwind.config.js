module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica','Arial','sans-serif']
    },
    extend: {
      colors: {
        'picton-blue': {
          light: '#337AB7',
          DEFAULT: '#337AB7',
          dark: '#14b367',
        },
        'nav-hover-blue': {
          DEFAULT: '#286090',
        },
        'nav-menu-active':{
          DEFAULT: '#1d4568',
        },
        'new': {
          DEFAULT: '#D9EDF7',
        },
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
