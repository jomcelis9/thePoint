/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {  
    letterSpacing:{
      widest:'0.25em'
    },
    fontFamily: {
      sans: ['"Montserrat"', 'sans-serif'],
      mono: ['"Inter"','monospace']



    },
    extend: {
      colors:{
        thePointRed:"#F91F1F",
        thePointPink:"#FF0085",
        thePointRed60:"#F91F1F60"
      }

    },
  },
}

