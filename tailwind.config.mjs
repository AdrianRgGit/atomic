/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "neuropol-rg": ["NeuropolRg", "sans-serif"],
        "neuropol-x-rg": ["NeuropolXRg", "sans-serif"],

        inter: ["Inter regular", "sans-serif"],
        "inter-bold": ["Inter bold", "sans-serif"],
        "inter-light": ["Inter light", "sans-serif"],
      },

      colors: {
        white: "#FBFCF2",
        gray: "#6B7484",
        lime: "#89FC21",
        blue: "#4080FB",
        purple: "#6B5AED",
      },
    },
  },
  plugins: [],
};
