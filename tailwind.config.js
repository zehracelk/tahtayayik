/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
   extend: {
   colors: {
     brown: {
       50: '#fdf8f6',
       100: '#f2e8e5',
       200: '#eaddd7',
       300: '#e0cec7',
       400: '#d2bab0',
       500: '#bfa094',
       600: '#a18072',
       700: '#977669',
       800: '#846358',
       900: '#43302b',

     },
     sliderBg:'#DBD6CE',
     transparent: 'transparent',
     current: 'currentColor',
     'soft':'#C2DEDC',
     'white': '#ffffff',
     'purple': '#3f3cbb',
     'midnight': '#121063',
     'metal': '#565584',
     'tahiti': '#3ab7bf',
     'silver': '#ecebff',
     'bubble-gum': '#ff77e9',
     'bermuda': '#78dcca',
     'earth':'#116A7B',
     'beige':'#FBF9F1',
   },
 
   backgroundImage: {
     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
     'gradient-conic':
       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
   },
 },
  },
  plugins: [],
}

 