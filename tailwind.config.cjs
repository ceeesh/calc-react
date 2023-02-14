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
        '1btns': '#232C43',
        '1tcolor': '#3B414E',
        '1btnsbg': 'hsl(30, 25%, 89%)',
        '1delbtn': 'hsl(225, 21%, 49%)',
        '1reset': 'hsl(225, 21%, 49%)',
        '1eql': 'hsl(6, 63%, 50%)',
      },
    },
  },
  plugins: [],
}
