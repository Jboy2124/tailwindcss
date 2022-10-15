/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'red-orange': '#E04D01',
        'bubble-gum': '#ff77e9'
      }
    },
  },
  plugins: [],
}
