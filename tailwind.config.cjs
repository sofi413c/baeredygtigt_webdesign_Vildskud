/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_green: "#C8FFA3",
        custom_purple: "#82425F",
        gradient_green: "#8A9B4D",
        gradient_orange: "#D07F4E",
        gradient_purple: "#82425F",
        purple_button: "#732565",
        beige: "#F3F3F3",
        gold: "#DAB430",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
