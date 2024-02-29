/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'btn-xs': '50px',
        'btn-sm': '100px',
        // Add more custom widths as needed
      },
      
    },
  },
  plugins:  [require("daisyui")],
  daisyui: {
    themes: [
      "garden"
      
    ],
  },
}

