/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#2C2E3C",
        primaryGreen: "#40BC96",
        primaryBlue: "#4285F4",
        primaryPurple: "#A68DE5",
        secondGreen: "#268B6C",
        hoverGreen: "#248063",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlternate: ["Montserrat Alternates", "sans-serif"],
        mrBedfort: ["Mr Bedfort", "cursive"],
      },
    },
  },
  plugins: [],
};
