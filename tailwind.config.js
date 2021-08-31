module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        black: {
          300: "#535E79",
          400: "#273353",
          500: "#021443",
        },
        primary: {
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
