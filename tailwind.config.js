/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Hand"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      clipPath: {
        customPolygon:
          "polygon(100% 0, 100% 50%, 100% 100%, 43% 100%, 11% 45%, 45% 0)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-custom-polygon": {
          clipPath:
            "polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0 64%, 0 37%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
