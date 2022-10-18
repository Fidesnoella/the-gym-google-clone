/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Arial": "arial,sans-serif",
      },
      colors: {
        'skyblue': '#4285f4',
        'secondary': '#1a0dab',
        'lightdark': '#3c4043',
        'lightgray': '#dadce0',
        'gray': '#f8f9fa',
        'darkgray': '#9aa0a6',
        'lightviolet': ' #dfe1e5',
        'white': '#f2f2f2', 
        'zinc': '#70757a', 
      },
      boxShadow:{
        searchshadow:"0 1px 6px rgb(32 33 36 / 28%)",
        buttonShadow:"0 1px 1px rgb(0 0 0 / 10%);"
      }
    },
  },
  plugins: [],
}
