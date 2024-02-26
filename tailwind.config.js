/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors:{
        "primary-100":"#28338b",
        "primary-300":"#c74bd2",
        "primary-500":"#1f1f1f",
        "gradient-100":"#3c1dff",
        "gradient-300":"#14c9c9",
        "gradient-400":"#A814C9",
      },
      content:{
        test100: "url('../build/img/a1.png')",
      }
    },
  },
  plugins: [],
}

