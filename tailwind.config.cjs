/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Ubuntu', 'sans'],
      sundanese: ['Sundanese'],
      kairaga: ['Kairaga', 'Ubuntu', 'sans'],
    },
    extend: {
      colors: {
        coffee: {
          50: '#f7f5ef',
          100: '#ebe6d6',
          200: '#d9ccaf',
          300: '#c3ad81',
          400: '#b2925d',
          500: '#a37f4f',
          600: '#8b6743',
          700: '#6f4e37',
          800: '#5f4334',
          900: '#533b30',
        },
        'dark-coffee': {
          50: '#f7f4f5',
          100: '#ebe2e3',
          200: '#d8c9cc',
          300: '#bda3a7',
          400: '#9a767b',
          500: '#7f5b60',
          600: '#6c4e50',
          700: '#5b4345',
          800: '#4e3c3c',
          900: '#3b2f2f',
        },
        'light-coffee': {
          50: '#f8f6f4',
          100: '#efebe5',
          200: '#ded5ca',
          300: '#cab9a7',
          400: '#bea895',
          500: '#a4836b',
          600: '#97735f',
          700: '#7e5f50',
          800: '#674e45',
          900: '#54413a',
        },
      },
    },
  },
  plugins: [],
}
