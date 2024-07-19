/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        playwrite : ['Playwrite HR','cursive' ],
        lilita : ["Lilita One", "sans-serif"],
        abril : ['Abril Fatface','serif'],
        asap : ["Asap", "sans-serif"],
        roboto : ["Roboto","Sans-serif"],
        bebas : ["Bebas Neue","sans-serif"]
      }

    },
  },
  plugins: [],
}

