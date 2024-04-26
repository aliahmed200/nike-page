/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: {
          default: "#0D1120",
          50: "#171E2C",
          500: "#0D1120",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        transx: {
          "0%": { transform: "translateX(-700px)" },
          "100%": { transform: "translateX(0)" },
        },
        transy: {
          "0%": { transform: "translateY(-200px)" },
          "100%": { transform: "translateY(0)" },
        },
        faidIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        transx: "transx 1s ease-in-out",
        transy: "transy 1s ease-in-out",
        faidIn: "faidIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
