/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
      },
      screens: {
        "not-mobile": "500px",
      },
      fontFamily: {
        "roboto-regular": ["Roboto-Regular"],
        "roboto-bold": ["Roboto-Bold"],
      },
      fontSize: {
        "stay-updated": ["2.5rem", "2.5rem"],
        "stay-updated-desktop": ["3.05rem", "5rem"]
      }
    },
  },
  plugins: [],
}