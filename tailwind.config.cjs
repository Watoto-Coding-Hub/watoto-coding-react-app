/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green-1":"#1a4331",
        "green-2":"#41916c",
        "green-3":"#2c664e",
        "light":"#fff",
        "dark":"#111"
      }
    },
    fontFamily: {
      Poppins:['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
