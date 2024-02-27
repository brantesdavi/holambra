/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "hlGreen": "#42C0B6",
        "hlBlue": "#003262",
      },
      height:{
        "732": "732px",
        "366": "366px"
      },
      fontSize:{
        "40": "40px"
      }
    },
  },
  plugins: [],
}

