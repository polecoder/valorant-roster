/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        tungsten: ["Tungsten", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
      },
      colors: {
        light: "#DDD",
        dark: "#333",
        "primary-blue": "#0F1923",
        "primary-red": "#FF4654",
      },
    },
  },
  plugins: [],
};
