/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
       fontFamily: {
        switzer: ["Switzer", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

        colors: {
          'gray': '#e1e1e1'
        },
          animation: {
            text: 'text 5s ease infinite',
          },
          keyframes: {
            text: {
              '0%, 100%': {
                'background-size': '200% 200%',
                'background-position': 'left center',
              },
              '50%': {
                'background-size': '200% 200%',
                'background-position': 'right center',
              },
            },
          },
      
    },
  },
  plugins: [],
}