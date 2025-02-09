
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        "star-movement-bottom":
            "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      colors: {
        primary: "#000d30",
        secondary: "#001246",
        tertiary: "#00125a",
        dark: "#000d1e",
        containerBG: "#1f2937",
        textMuted: "#c9d4e1",   // Darker muted shade
        textLink: "#3A6F96",    // Matching textPrimary
        textDisabled: "#b1c5dd", // Darker disabled shade
        textLight: "#d9e5f1",   // Softer light text

        textHeading: "#ffffff",
        textPrimary: "#3A6F96",
        textSubtle: "#8ea6b8",
        textAccent: "#1F3D5A",

      },
      boxShadow: {
        100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
        200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF",
        300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
        400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
        500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        borderColor: "border-color",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "3/20": "15%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
        "15/20": "75%",
        "17/20": "85%",
        "19/20": "95%",
        22: "88px",
        100: "100px",
        512: "512px",
        330: "330px",
        388: "388px",
        400: "400px",
        440: "440px",
        640: "640px",
        960: "960px",
        1230: "1230px",
      },
      zIndex: {
        1: "1",
        2: "2",
        4: "4",
      },
      lineHeight: {
        12: "48px",
      },
      borderRadius: {
        14: "14px",
        20: "20px",
        40: "40px",
        half: "50%",
        "7xl": "40px",
      },
      flex: {
        50: "0 0 50%",
        320: "1px 0 320px",
        300: "0 0 300px",
        540: "0 0 540px",
        280: "0 0 280px",
        256: "0 0 256px",
        100: "0 0 100%",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".custom-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".stylish-scrollbar::-webkit-scrollbar": {
          width: "1px",
          height: "5px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-track": {
          background: theme("colors.primary"),
          "border-radius": "10px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-thumb": {
          background: `linear-gradient(45deg, ${theme(
              "colors.secondary"
          )}, ${theme("colors.secondary")})`,
          "border-radius": "10px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: `linear-gradient(45deg, ${theme(
              "colors.accent"
          )}, ${theme("colors.accent2")})`,
        },
      });
    },
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette
      ? flattenColorPalette(theme("colors"))
      : Object.fromEntries(
          Object.entries(theme("colors")).map(([key, val]) => [`--${key}`, val])
      );

  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
