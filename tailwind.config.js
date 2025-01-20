/** @type {import('tailwindcss').Config} */
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import svgToDataUri from 'mini-svg-data-uri';

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightColors: {
          primary: "#0c314e", // Deep Navy Blue
          secondary: "#19567c", // Medium Blue
          accent: "#007BFF", // Electric Blue
          accent2: "#87CEEB", // Sky Blue
          tertiary1: "#9da6aa", // Charcoal Gray
          tertiary2: "#b2bbbd", // Silver Gray
          text1: "#a3becc", // Soft Gray Blue - For primary text
          text2: "#a3becc", // Soft Gray Blue - Alternate text
          text3: "#b5ddeb", // Light Sky Blue - For secondary text
          neutral: "#FFFFFF", // White - For background or neutral spaces
          dark: "#002B5C", // Dark Blue
        },
        darkColors: {
          darkBackground1: "#1a1a1a", // Gray-900
          darkBackground2: "#2d2d2d", // Gray-800
          darkBackground3: "#121212", // Darker shade for primary background
          darkBackground4: "#181818", // Slightly lighter dark background for cards or sections

          lightText1: "#d1d5db", // Gray-300
          lightText2: "#9ca3af", // Gray-400
          lightText3: "#e5e7eb", // Light Gray for muted texts
          lightText4: "#f3f4f6", // Very light gray for subtle text

          whiteTextHover: "#ffffff",

          hoverBackground: "#333333", // Dark hover effect
          hoverBackground2: "#444444", // Slightly lighter hover background

          border: "#4b5563", // Gray-600
          border2: "#6b7280", // Gray-500 for secondary borders

          accent1: "#6200ea", // Purple for accents
          accent2: "#03dac6", // Teal accent for buttons or highlights
          accent3: "#ffb300", // Amber accent for call-to-action elements

          buttonBackground: "#374151", // Dark Gray background for buttons
          buttonHoverBackground: "#4b5563", // Light Gray hover effect for buttons

          linkText: "#1e40af", // Blue color for links
          linkTextHover: "#3b82f6", // Hover effect for links (lighter blue)

          shadowLight: "#000000", // Light shadow for elements
          shadowHeavy: "#111111", // Heavier shadow for floating elements
        },
        myColors: {
          900: '#010f22', // Darker gray for the footer background
          800: '#2d3748', // Darker gray for the section background
          600: '#4b5563', // Slightly lighter gray for the border color

          300: '#d1d5db', // Light gray for text and social icons
          400: '#9ca3af', // Medium gray for other text
          500: '#6b7280',
        },
      },
      animation: {
        moveUp: 'moveUp 1.4s ease forwards',
        appear: 'appear 1s 1s forwards',
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
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
          background: theme("colors.lightColors.primary"), // Custom track color
          "border-radius": "10px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-thumb": {
          background: `linear-gradient(45deg, ${theme("colors.lightColors.secondary")}, ${theme("colors.lightColors.secondary")})`, // Custom thumb gradient
          "border-radius": "10px",
        },
        ".stylish-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: `linear-gradient(45deg, ${theme("colors.lightColors.accent")}, ${theme("colors.lightColors.accent2")})`, // Hover effect on thumb
        },
      });
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};
