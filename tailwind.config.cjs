/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      none: "0 0 #0000",
      sm: "2px 2px 0 0",
      md: "4px 4px 0 0",
      lg: "6px 6px 0 0",
    },
  },
  plugins: [require("daisyui")],
};
