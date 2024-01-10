/** @type {import('tailwindcss').Config} */
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  content: ["./src/**/*.{html,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js",],
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
})

