/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warning: "#FDDE69",
        dark: "#000000",
        lightGray: "#7F85A2",
        blue: "#03004D",

        secondary: "#e95757",
        tertiary: "#082365",
        
        bgGray: "#F5F5F5",
        darkGary: "#F0F0F0",
        mainBg: "#f1f6fb",
        
        blueHeader: "#3C6EF5",
        OrangeBuilder: "#ED754B",
        FontGray: "#8a98a2",
        darkBlack: "#263238",
        greenShade: "#58AA43",
        purpleShade: "#383DD3",
        navyBlue: "#8055D9",
        logoRed: "#DC4B35",
        darkblue: "#050B43"
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}