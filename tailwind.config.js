/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        roxo: "#841C94",
        rosa: "#B37AC5",
        cinza: "#828282",
      },
      fontFamily: {
        newAstro: ["new-astro", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
