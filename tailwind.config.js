/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        light: "300",
        regular: "400",
        semibold: "500",
        bold: "700",
        extrabold: "800",
        heavy: "900",
      },
      lineHeight: {
        4.5: "1.125rem",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        heavy: "900",
      },
      spacing: {
        1.5: "0.375rem",
      },
      screens: {
        mobile: { min: "0px", max: "767px" },
        desktop: { min: "768px" },
      },
    },
  },
  plugins: [],
};
