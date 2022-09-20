/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'flick-pink':'#F72585',
        'vivid-blue':'#4CC9F0',
        'typan-blue':'#3A0CA3',
        'persian-blue':'#3F37C9',
        'dodger-blue':'#4895EF',
        'purple':'#7209B7',
        'ultramarine':'#4361EE'
      }
    },
    screens:{
      'xs': '420px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
