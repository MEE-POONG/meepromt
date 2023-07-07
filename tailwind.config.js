const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font01: "'Prompt', sans-serif"
      }
    },
  },
  plugins: [
<<<<<<< HEAD
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
=======
    require('tailwindcss-animated')
>>>>>>> fa9b1064e19d8f908ca72c666b1d2d1c4601060b
  ],
});
