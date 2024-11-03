/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primaryBlue: "#566CE8",
        primaryDarkGray: "#0F0F10",
        secondaryLightBlue: "#D2D8F9",
        secondarygray: "#19191A",
        secondaryLightGray: "#F1F1F1",
        title: "#2E2E2E",
        body: "#808080",
        offwhite: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
