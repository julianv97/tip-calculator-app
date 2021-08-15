module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "630px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      spacemono: "Space Mono",
    },
    extend: {
      colors: {
        "Very-dark-cyan": "hsl(183, 100%, 15%)",
        "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "Dark-grayish-cyan-1": "hsl(184, 14%, 56%)",
        "Light-grayish-cyan": "hsl(185, 41%, 84%)",
        "Light-grayish-cyan-1": "hsl(189, 41%, 97%)",
        "strong-cyan": "hsl(172, 67%, 45%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
