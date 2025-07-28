/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      padding:{
        '18' : '72px',
        '7.5' : '30px',
        '13.5' : '54px',
      },
      margin:{
        '1.375' : '5.5px',
        '1.0425' : '4.17px',
        '14.5' : '58px',
      },
    },
  },
  plugins: [],
}
