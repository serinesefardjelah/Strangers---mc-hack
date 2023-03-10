/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue : "#1C76DA",
        darkBlue: "#1762B5",
        greyBenefits: "#F2F2F2"
        
      },
      fontFamily: {
        poppins : "Poppins",
        anybody : "Anybody"
      },
      padding:{
        ma : "450px"
      }
      
    },
  },
  plugins: [],
}