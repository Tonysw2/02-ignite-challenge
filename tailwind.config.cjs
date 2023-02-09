/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        background: '#FAFAFA',

        yellow300: '#F1E9C9',
        yellow500: '#DBAC2C',
        yellow700: '#C47F17',

        purple300: '#EBE5F9',
        purple500: '#8047F8',
        purple700: '#4B2995',

        card: '#F3F2F2',
        input: '#EDEDED',
        button: '#E6E5E5',
        hover: '#D7D5D5',
        label: '#8D8686',
        text: '#574F4D',
        subtitle: '#403937',
        title: '#272221',
      },
    },

    fontFamily: {
      roboto: ["'Roboto'", 'sans-serif'],
      baloo: ["'Baloo 2'", 'cursive'],
    },

    fontSize: {
      '1xs': '0.625rem', // 10px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '1xl': '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '3rem', // 48px
    },

    lineHeight: {
      1: '130%',
      2: '160%',
    },
  },

  plugins: [],
}
