/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#FBAF85",
        dark: "#101010",
        lightGray: "#F1F1F1",
        darkGray: "#979797",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        h1: ["56px", { lineHeight: "58px", letterSpacing: "2px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "44px", letterSpacing: "1.5px", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "36px", letterSpacing: "1.15px", fontWeight: "700" }],
        h4: ["28px", { lineHeight: "38px", letterSpacing: "2px", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "33px", letterSpacing: "1.7px", fontWeight: "700" }],
        h6: ["18px", { lineHeight: "24px", letterSpacing: "1.3px", fontWeight: "700" }],
        overline: ["14px", { lineHeight: "19px", letterSpacing: "10px", fontWeight: "400" }],
        subtitle: ["13px", { lineHeight: "25px", letterSpacing: "1px", fontWeight: "700" }],
        body: ["15px", { lineHeight: "25px", fontWeight: "500" }],
      },
      maxWidth: {
        container: "1110px",
      },
    },
  },
  plugins: [],
};