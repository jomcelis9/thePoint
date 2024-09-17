/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
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
  plugins: [
    require('flowbite/plugin')
  ],
}

