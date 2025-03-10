/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
              "title" : "25px",
              "description":"20px",
              "subtitle":"40px",
              "inve" :"25px",
              "arti":"30px",
              "ft":"15px"
             },
          
            },
             colors:{
              "info":"#6e6e6e"
             }

             
  },
  plugins: [],
});
