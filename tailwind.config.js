module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        black: {
          50: "#f0f2f7",
          100: "#cdd3df",
          300: "#535E79",
          400: "#273353",
          500: "#021443",
        },
        primary: {
          50: "#E7E5F2",
          400: "#5845a6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
