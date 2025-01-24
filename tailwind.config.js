/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        portada: "url(./assets/portada-home-tres.jpg)"
      },
      fontFamily: {
        primary: "Roboto" 
      }
    },
  },
  plugins: [],
}

