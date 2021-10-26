module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    flex: {
      '100': '1 0 0'
    },
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '8': '8px'
    },
    extend: {
      spacing: {
        '13': '3.25rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
