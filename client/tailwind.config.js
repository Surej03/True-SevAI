/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors:{
        'primary':"gray",
        lightHover: '#fcf4ff',
        darHover: '#2a004a',
        darkTheme: '#11001F',
        lightTheme: '#FAFAFA',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}