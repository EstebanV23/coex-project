/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work': ['Work Sans']
      },
      colors: {
        'primary-blue': {
          DEFAULT: '#68A7AD',
          50: '#DFECEE',
          100: '#D2E5E6',
          200: '#B7D5D8',
          300: '#9DC6CA',
          400: '#82B6BB',
          500: '#68A7AD',
          600: '#4E898F',
          700: '#3A676B',
          800: '#264446',
          900: '#132122'
        },
        'secondary-blue': {
          DEFAULT: '#99C4C8',
          200: '#E9F2F3',
          300: '#CEE3E5',
          400: '#B4D3D6',
          500: '#99C4C8',
          600: '#75AFB4',
          700: '#54969C',
          800: '#417378',
          900: '#2D5054'
        },
        'primary-yellow': {
          DEFAULT: '#E5CB9F',
          300: '#F6EEDF',
          400: '#EEDCBF',
          500: '#E5CB9F',
          600: '#D9B373',
          700: '#CD9B47',
          800: '#AD7E2F',
          900: '#815E23'
        },
        'secondary-yellow': {
          DEFAULT: '#EEE4AB',
          300: '#FCFAEF',
          400: '#F5EFCD',
          500: '#EEE4AB',
          600: '#E5D57C',
          700: '#DBC64E',
          800: '#C8B029',
          900: '#9A871F'
        },
        'error': {
          DEFAULT: '#E17373',
          100: '#FEF9F9',
          200: '#F7D8D8',
          300: '#EFB6B6',
          400: '#E89595',
          500: '#E17373',
          600: '#D74545',
          700: '#BC2828',
          800: '#8D1E1E',
          900: '#5F1414'
        },
      }
    },
  },
  plugins: [],
}
