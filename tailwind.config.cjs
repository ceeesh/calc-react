/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '1blue': 'hsl(222, 26%, 31%)',
        '1screen': '#182034',
        '1btns': '#232C43'
      },
    },
  },
  plugins: [],
}
