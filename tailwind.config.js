/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
      colors: {
        offwhite1: "#FAFAFA",
        offwhite2: "#FCFCFC",
        skyblue: "#00E0FF3D",
        deepblue: "#00588A",
        offblue: "#233E60",
        gold: "#FFC7005E",
        deepgold: "#665E40",
        offgold: "#742D06",
        brown: "#FF7A0078",
        deepbrown: "#664D36",
        offbrown: "#742D06",
        green: "#42FF005E",
        deepgreen: "#4A6640",
      },
    },
  },
  plugins: [],
};
