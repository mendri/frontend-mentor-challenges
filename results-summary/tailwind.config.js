/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0.1)",
      },
      fontSize: {
        "circle-text-size": ["2.75rem", "1"]
      },
      fontFamily: {
        "HankenGrotesk": ["HankenGrotesk"]
      },
      screens: {
        "not-mobile": "500px",
      },
    },
  },
  plugins: [],
}

