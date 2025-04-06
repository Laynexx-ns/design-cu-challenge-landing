/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "baseBlack": "#141414",
        "baseWhite": "#E6E6E6"
      },
      fontFamily: {
        "titles" : ["Bounded", "sans-serif"],
        "paragraph" : ["Graphik", "sans-serif"],
      }
    },
  },
  plugins: [],
}
