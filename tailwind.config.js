/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      width: {
        'player-large': '896px',
        'player-small': '456px',

      height:{
        'player-large': '640px',
        'player-small': '1219px',
      }
      },
    },
  },
    plugins: [],
}