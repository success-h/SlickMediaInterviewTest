module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/hero.jpg')",
      },
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#292929",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    screens: {
      sm: "640px",

      md: "838px",

      xl: "1440px",
    },
  },
  plugins: [],
};
834;
