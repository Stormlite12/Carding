/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",],
  theme: {
    extend: {
      fontFamily: {
      customFont: ['"Custom Font"', "sans-serif","Public Sans"],
      // Add more custom font families as needed
    },},
  },
  plugins: [],
}

