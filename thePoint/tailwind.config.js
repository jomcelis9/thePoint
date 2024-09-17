/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      colors:{
        thePointRed:"#F91F1F",
        thePointPink:"#FF0085",
        thePointRed60:"#F91F1F60"
      }
    },
  },
  plugins: [],
}

