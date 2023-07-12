/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F102B",
          light: "#0F102B",
          dark: "#F8FAFD",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
          dark: "#030712",
        },
      },
    },
  },
  plugins: [],
};
