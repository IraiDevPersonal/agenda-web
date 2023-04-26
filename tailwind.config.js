/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F6F0FF",
          100: "#EFE5FF",
          200: "#DCC7FF",
          300: "#CDADFF",
          400: "#BD94FF",
          500: "#AA77FF",
          600: "#7E2EFF",
          700: "#5600E0",
          800: "#390094",
          900: "#1D004D",
          950: "#0E0024"
        },
        secondary: {
          50: "#F0FAFF",
          100: "#E0F5FF",
          200: "#C2ECFF",
          300: "#A3E2FF",
          400: "#80D7FF",
          500: "#62CDFF",
          600: "#1AB6FF",
          700: "#0092D6",
          800: "#00628F",
          900: "#003147",
          950: "#001824"
        }
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true })
  ]
}
