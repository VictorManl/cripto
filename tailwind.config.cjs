/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.jsx'],
  daisyui: {
    themes: ["magdalena", "dark", "cmyk"],
  },
  theme: {
    extend: {
      fontFamily:{
        'Monserrat' : ['Montserrat','sans-serif']
      },
      animation:{
        'Derecha' : 'fromDerecha 300ms linear',
        'eDerecha' : 'eDerecha 500ms linear',
      },
      keyframes:{
        fromDerecha : {
          '0%' : { transform : 'translateX(200%)'},
          '100%' : { transform : 'translateX(0%)' },

        },
        eDerecha : {
          '0%' : { transform : 'translateX(0%)' },
          '100%' : { transform  : 'translateX(200%)' ,}
        }
      }


    },
  },
  plugins: [require("daisyui")],
}
