/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0B0F19",
          gold: "#C9A227",
          goldLight: "#E7C766",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
