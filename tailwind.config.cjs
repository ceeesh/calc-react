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
        '1hstry': 'hsl(225, 21%, 49%)',
        '1ball': 'hsl(6, 63%, 50%)',
        '2back': 'hsl(0, 0%, 90%)',
        '2text': 'hsl(60, 10%, 19%)',
        '2screen': 'hsl(0, 0%, 93%)',
        '2btns': 'hsl(0, 5%, 81%)',
        '2btnsbg': 'hsl(45, 7%, 89%)',
        '2delbtn': 'hsl(185, 42%, 37%)',
        '2eql': 'hsl(25, 98%, 40%)',
        '3back': 'hsl(268, 75%, 9%)',
        '3text': 'hsl(52, 100%, 62%)',
        '3screen': 'hsl(268, 71%, 12%)',
        '3btns': 'hsl(268, 71%, 12%)',
        '3btnsbg': 'hsl(268, 47%, 21%)',
        '3delbtn': 'hsl(281, 89%, 26%)',
        '3eql': 'hsl(176, 100%, 44%)',

      },
      boxShadow: {
        '1shd': '0 3px 0px 0px hsl(28, 16%, 65%)',
        '1dshd': '0 3px 0px 0px hsl(224, 28%, 35%)',
        '2eshd': '0 3px 0px 0px hsl(6, 70%, 34%)',
        '2delshd': '0 3px 0px 0px hsl(185, 58%, 25%)',
        '3shd': '0 3px 0px 0px hsl(285, 91%, 52%)',
        '3eqlshd': '0 3px 0px 0px hsl(177, 92%, 70%)'
      }
    },
  },
  plugins: [],
}
