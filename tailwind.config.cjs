/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:['Nunito','sans-serif'],
      },
      colors:{
        'communitybg':'#F5F5F5',
        'herobg':'#FFF3FC',
      },
      backgroundImage:{
        'valuebg':'url("/src/assets/valueCommunityBg.png")',
      }
    },
  },
  plugins: [],
}