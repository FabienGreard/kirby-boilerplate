module.exports = {
  mode: 'jit',
  purge: ['design-system/**/*.{js,ts,jsx,tsx}', 'pages/**/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      colors: {
        primary: {
          50: '#f7e4f0',
          100: '#ecbcda',
          200: '#e391c1',
          300: '#db67a8',
          400: '#d74894',
          500: '#d52a80',
          600: '#c4297a',
          700: '#ad2872',
          800: '#97266a',
          900: '#72205c',
        },
        secondary: {
          50: '#e2f8eb',
          100: '#baeecd',
          200: '#89e2ad',
          300: '#48d78b',
          400: '#00cd70',
          500: '#00c259',
          600: '#00b24e',
          700: '#009f42',
          800: '#008e36',
          900: '#006d21',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
