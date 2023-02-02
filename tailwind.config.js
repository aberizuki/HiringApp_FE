module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('src/assets/img/agencyfix.png')",
        banner: "url('src/assets/img/banner.png')",
      },
    },
    screens: {
      sm: "640px",
      md: "870px",
      lg: "1024px",
    },
  },
  plugins: [],
};
