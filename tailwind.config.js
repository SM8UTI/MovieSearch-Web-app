/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#E62725",
      },
      backgroundImage: {
        lightGradient: "bg-gradient-to-r from-rose-500 via-red-400 to-red-500",
        darkGradient: "bg-gradient-to-r from-red-500 to-red-800",
      },
      boxShadow: {
        primary: "shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]",
      },
    },
  },
  plugins: [],
};
