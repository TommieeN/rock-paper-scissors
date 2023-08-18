/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'triangle-bg': "url('./src/assets/images/bg-triangle.svg')",
      },
      colors: {
        "border-primary": "#606e85;",
      },
    },
  },
  plugins: [],
}

