/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'triangle-bg': "url('./src/assets/images/bg-triangle.svg')",
        "gradient-rule": "linear-gradient(214deg, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      colors: {
        "border-primary": "#606e85;",
        
      },
    },
  },
  plugins: [],
}

