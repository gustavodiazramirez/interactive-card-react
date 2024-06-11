/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          "gradient-start": "hsl(249, 99%, 64%)",
          "gradient-end": "hsl(278, 94%, 30%)",
          red: "hsl(0, 100%, 66%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "light-grayish-violet": "hsl(270, 3%, 87%)",
          "dark-grayish-violet": "hsl(279, 6%, 55%)",
          "very-dark-violet": "hsl(278, 68%, 11%)",
        },
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        body: ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
        body: 500,
      },

      backgroundImage: (theme) => ({
        "card-back": "url('/src/assets/bg-card-back.png')",
        "card-front": "url('/src/assets/bg-card-front.png')",
        "main-desktop": "url('/src/assets/bg-main-desktop.png')",
        "main-mobile": "url('/src/assets/bg-main-mobile.png')",
      }),
    },
  },
  plugins: [],
};
