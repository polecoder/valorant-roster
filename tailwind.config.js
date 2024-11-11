/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        tungsten: ["Tungsten", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        light: "#EEE",
        dark: "#111",
        "primary-blue": "#0F1923",
        "primary-red": "#FF4654",
      },
      screens: {
        xs: "520px",
      },
    },
  },
  plugins: [],
};
