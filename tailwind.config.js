/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px'
    },
    extend: {
      colors: {
        'red-orange': '#E04D01',
        'bubble-gum': '#ff77e9'
      }
    },
  },
  plugins: [],
}
