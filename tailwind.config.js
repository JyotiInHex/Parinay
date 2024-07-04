/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['"Playfair Display"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
        'greatvibes': ['"Great Vibes"', 'cursive'],
        'lato': ['"Lato"', 'sans-serif'],
        'chaviera': ['"Chaviera"', 'cursive'],
      },
      textShadow:{
        'sm': '1px 1px 2px rgba(0,0,0,0.1)',
        'md': '2px 2px 4px rgba(0,0,0,0.2)',
        'xl': '4px 4px 8px rgba(0,0,0,0.4)',
        '2xl': '5px 5px 10px rgba(0,0,0,0.5)',
        '3xl': '6px 6px 12px rgba(0,0,0,0.6)',
        '4xl': '7px 7px 14px rgba(0,0,0,0.7)',
        '5xl': '8px 8px 16px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [
    function({matchUtilities,theme}){
      matchUtilities(
        {'text-shadow': (value) => ({textShadow: value,}),},
        {values: theme('textShadow')}
      )
    }
  ],
}
