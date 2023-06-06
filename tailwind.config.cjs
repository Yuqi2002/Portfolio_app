/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111112",//background color 
        secondary: "#8b9dc7",// text color 
        tertiary: "#2b2c38",// card and textbox color
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "grey-100": "#484d70",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
