/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],}
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
