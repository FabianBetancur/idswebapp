/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  container:{
    screens:{
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
      '2x1': '1536px'
    }
  },
  plugins: [],
}

