/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'triangle-bg': "url('./src/assets/images/bg-triangle.svg')",
        "gradient-rule": "linear-gradient(214deg, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        "gradient-paper": "linear-gradient(214deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "gradient-scissors": "linear-gradient(214deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "gradient-rock": "linear-gradient(214deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      },
      colors: {
        "border-primary": "#606e85;",
      },
      screens: {
        lg: "459px",
      },
    },
  },
  plugins: [],
}

