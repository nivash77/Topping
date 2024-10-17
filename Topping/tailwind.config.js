/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        drama: ['"Drama Regular"', 'sans-serif'],
        pacifico: ['"Pacifico"', 'cursive'],
        updock: ['"Updock"', 'cursive'],
      },
    },
  },
  plugins: [],
}