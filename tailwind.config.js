/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#174275",
        sky: "#C1F0FB",
        ice: "#F2F7FC",
        cement: "#F6F6F6",
        orange: "#FF6341",
        kala: "#4C4C4C",
        black: "#37384F",
        border: "#e5e7eb",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      fontSize: { bona: "10px" },
    },
  },
  plugins: [],
};
