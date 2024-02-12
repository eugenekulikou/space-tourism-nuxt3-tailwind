/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    colors: {
      light: "hsl(var(--color-light) / <alpha-value>)",
      dark: "hsl(var(--color-dark) / <alpha-value>)",
      white: "hls(var(--color-white) / <alpha-value>)",
    },
    fontFamily: {
      "sans-cond": ["Barlow Condensed"],
      "sans-normal": ["Barlow"],
      serif: ["Bellefair"],
    },
    fontSize: {
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      xl: "1.125rem" /* 18px */,
      "2xl": "1.75rem" /* 28px */,
      "4xl": "2rem" /* 56px */,
      "6xl": "3.5rem" /* 56px */,
      "8xl": "6.25rem" /* 100px */,
      "9xl": "9.375rem" /* 150px */,
    },
    extend: {},
  },
  plugins: [],
};
