module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        accent: "Frank Ruhl Libre",
      },
      boxShadow: {
        menu: "0px 4px 20px rgba(2, 20, 67, 0.12);",
      },
      colors: {
        black: {
          30: "#fafafb",
          50: "#f0f2f6",
          100: "#cdd3df",
          200: "#97a0b8",
          300: "#535e79",
          400: "#273353",
          500: "#021443",
          700: "#010e34",
          900: "#01061e",
        },
        blue: {
          30: "#f7fafc",
          50: "#e9f3fb",
          100: "#c7e1f5",
          200: "#a2ceef",
          300: "#60abe4",
          400: "#3b98de",
          500: "#1777c1",
          700: "#005495",
          900: "#003f70",
        },
        aqua: {
          30: "#f7fcfc",
          50: "#e9f7f6",
          100: "#c7f5f2",
          200: "#a2e5e3",
          300: "#64cecb",
          400: "#0fbebe",
          500: "#00a1a1",
          700: "#007981",
          900: "#005062",
        },
        yellow: {
          50: "#fffbdc",
          100: "#ffeea0",
          200: "#ffd978",
          300: "#ffc756",
          400: "#ffa722",
        },
        magenta: {
          500: "#E10079",
        },
      },
      fill: (theme) => ({
        "black-200": theme("colors.black.200"),
      }),
      screens: {
        "supports-hover": { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
