/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       greek: '#35d187',
       baciak: 'rgba(53, 209, 135, 0.5)',
       btn2: 'rgba(53, 209, 135, 0.19)',
       shadbg: '#fff8f8',
       bgCol: 'rgba(255, 248, 248, 0.9)',
      },
      images: {
        gofast : 'url(./images/Gofast.png)',
      },
    },
  },
  plugins: [],
}
