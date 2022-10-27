/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md9: "900px",
        // => @media (min-width: 900px) { ... }
      },
      colors: {
        "alert-text": "#d4975c",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
