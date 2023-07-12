/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#243c5a',
      },
      dropShadow:{
        "heder-shadow":"rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },

    },
  },
  plugins: [],
}

