/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary1: "#6D5DE7",
      primary2: "#574ab8",
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px", max: "9535px" },
    },
  },
  plugins: [],
};
