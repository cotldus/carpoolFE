/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/admin/**/*.{js,jsx,ts,tsx}",
    "./src/pages/api/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#DCE3E7",
        "mint-green": "#D7FDF0",
        "minimalist-white": "#F5F5F5",
        "liight-blue": "#ECEFF1",
        "sky-blue": "#87CEEB"
        // add more custom colors here
      },
      fontFamily: {
        'lora': ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}