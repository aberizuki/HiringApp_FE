/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "820px",

      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        hero: "url('../../assets/img/agencyfix.png')",
        banner: "url('../../assets/img/banner.png')",
      },
    },
  },
  plugins: [],
};
