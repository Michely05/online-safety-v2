/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "color(display-p3 0.133 0.133 0.133)",
        primaryColor: "hwb(50deg 0% 0%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
