/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      buttoncolor:'#3EC5FA', 
      txcolor:'#FEF5E7',
      customgrey:'#969696',
      greylight:'#646464',
      strocks:'#D9D9D9',
      stepsbg:'#EDF1FC',
      yellow:'#FDDB3A'
    },
    extend: {
      lineHeight:{
        'myheight':'1.2',
        'myheight2':'1.4',
      }
    },
  },
  plugins: [],
}

