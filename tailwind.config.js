module.exports = {
  purge: ['./design-system/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
