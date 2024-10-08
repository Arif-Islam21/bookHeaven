/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#FAF9F6",
        deepGreen: "#02590F",
        lightGreen: "#61AB7A",
        // [#012E4A]
      },
      fontFamily: {
        lora: '"Lora", system-ui',
        merriWeather: '"Merriweather", serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
