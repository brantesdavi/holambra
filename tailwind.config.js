/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "hlGreen": "#42C0B6",
        "hlBlue": "#003262",
        "hlBlack": "#212529"
      },
      height:{
        "732": "732px",
        "366": "366px",
        "162": "162px",
        "90": "90px",
        "40": "40px",
      },
      width:{
        "1110": "1110px",
        "540": "540px",
        "255": "255px",
        "420": "420px",
        "200": "200px",
        "90": "90px",
        "40": "40px",
      },
      fontSize:{
        "40": "40px"
      },
      padding:{
        "310": "310px",
        "100": "100px",
        "60": "30px"
      }
    },
  },
  plugins: [],
}

