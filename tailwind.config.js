const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191414",
        secondary: "#1db954",
      },
      animation: {
        slideUp: "animateHeight",
      },
      boxShadow: {
        platform: "0px 0px 80px 10px rgba(4, 4, 4, 1)",
      },
    },
  },
  plugins: [],
  corePlugin: {
    preflight: false,
  },
};
export default config;
