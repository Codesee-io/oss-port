module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        black: {
          50: "#f0f2f7",
          100: "#cdd3df",
          200: "#97a0b8",
          300: "#535e79",
          400: "#273353",
          500: "#021443",
        },
        primary: {
          50: "#e7e5f2",
          400: "#5845a6",
        },
      },
      fill: (theme) => ({
        "black-200": theme("colors.black.200"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
