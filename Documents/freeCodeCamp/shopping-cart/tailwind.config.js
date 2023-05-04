/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'keyboards': "url('./src/assets/keyboards.webp')",
        'switches': "url('./src/assets/switches.jpg')",
        'keycaps': "url('./src/assets/keycaps.jpg')",
        "cables": "url('./src/assets/cable.avif')",
        "main-image": "url('https://keebstore.netlify.app/bg.jpg')",
      }
    },
  },
  plugins: [],
}

