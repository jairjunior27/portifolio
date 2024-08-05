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

      keyframes: {
        aniHover: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        hoverColorChange: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        scrollIn: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        aniHover: "aniHover 0.5s ease-in-out infinite",
        hoverColorChange: "hoverColorChange 0.5s ease-in-out forwards",
        scrollIn: "scrollIn 0.6s ease-out forwards",
      },

      backgroundSize: {
        "200%": "200%",
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
