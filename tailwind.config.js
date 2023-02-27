/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      primary1:'#6D5DE7',
      primary2:'#574ab8',
      transparent: 'transparent',
      current: 'currentColor',
      ...colors
    },    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
