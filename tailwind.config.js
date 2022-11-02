/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      500: "500px",
    },
    boxShadow: {
      wrap: "0 15px 25px  rgba(0, 0, 50, 0.3)",
    },
    extend: {
      transitionProperty: {
        mh: "max-height",
      },
      transitionDuration: {
        1000: "1s",
        650: "650ms",
      },
      width: {
        45: "45%",
        0.6: "0.6rem",
      },
      height: {
        90: "90%",
      },
      screens: {
        md9: "900px",
      },
      colors: {
        "alert-text": "#d4975c",
        faq1: "#8ffcff",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
