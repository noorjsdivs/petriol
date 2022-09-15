/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        topHeader: "#282828",
        redPrimary: "#F40404",
        lightGray: "#F0F0F0",
        darkLight: "rgba(0,0,0,.6)",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
