/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
      success:colors.teal,
      primary:colors.slate
    },
    container:{
      screens:{
        sm: '400px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2x1': '1536px'
      }
    }
  },
},
  
  plugins: [],
}

