/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      colors: {
        primary: "#0C1838", // Darker gray for the footer background
        secondary: "#01233c", // Darker gray for the section background
        tertiary: "#013651", // Slightly lighter gray for the border color
        dark: "#05091D",
        containerBG: "#1f2937",

        // Updated text colors with a subtle blue shade
        textMuted: "#6C7B8B", // A muted light blue-gray for less emphasis
        textLink: "#4C91C1",  // A soft blue for links
        textDisabled: "#A1B1C3", // A muted, bluish-gray for disabled text
        textLight: "#F8FFFF",
        textHeading: "#ffffff",
        textPrimary: "#3A6F96", // A medium blue-gray for general text, subtle yet readable
        textSubtle: "#5E7D91", // A softer blue with a hint of gray, for secondary or supporting text
        textAccent: "#4A8FB2",
        // Add 'accent' and 'accent2' colors if needed
        accent: "#ff4081", // Example color
        accent2: "#d81b60", // Example color
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
          "-ms-overflow-style": "none", // For IE and Edge
          "scrollbar-width": "none", // For Firefox
        },
        ".stylish-scrollbar::-webkit-scrollbar": {
          width: "1px", // Width of scrollbar
          height: "5px", // Height of scrollbar for horizontal scrolling
        },
        ".stylish-scrollbar::-webkit-scrollbar-track": {
          background: theme("colors.primary"), // Custom track color
          "border-radius": "10px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-thumb": {
          background: `linear-gradient(45deg, ${theme("colors.secondary")}, ${theme("colors.secondary")})`, // Custom thumb gradient
          "border-radius": "10px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: `linear-gradient(45deg, ${theme("colors.accent")}, ${theme("colors.accent2")})`, // Hover effect on thumb
        },
      });
    },
  ],
};
