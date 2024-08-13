/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#01ff06",
      },
      fontFamily: {
       
        Rampart: ["Rampart One", "cursive", ...defaultTheme.fontFamily.sans],
        Roboto:["Roboto", "sans-serif"],
       },
    },
  },
  plugins: [],
}

