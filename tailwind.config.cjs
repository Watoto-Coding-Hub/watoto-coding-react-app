/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "grey-1":"#b2b2b2",
        "light":"#fff",
        "grey-2":"#f6f5f5",
        "blue-1":"#17a2b8",
        "yellow-1":"#ffc107",
        "dark": "#343a40",
        "marron":"#dc3545 ",
        "red":"#fd4d40",
        "orange":"#fdb62f",
        "blue-2":"#16c3b0",
        "green":"#71bc42"
      }
    },
    fontFamily: {
      Poppins:['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
