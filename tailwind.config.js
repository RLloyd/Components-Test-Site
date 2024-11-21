/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {
       colors: {
         primary: '#8465C3',
         secondary: '#3AF1F9',
         accent: '#F46A47',
         success: '#A2C465',
         warning: '#FAD8B4',
         danger: '#F5536A',
       },
       fontFamily: {
         header: ['Libre Baskerville', 'serif'],
         body: ['Open Sans', 'sans-serif'],
       },
       textShadow: {
         'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
         'DEFAULT': '1px 1px 2px rgba(0, 0, 0, 0.5)',
       }
     },
   },
   plugins: [],
 }