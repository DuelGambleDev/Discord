/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      fontFamily: {
        custom: ['SF Pro Display', 'sans-serif'],
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
        'sf-pro-thin-italic': ['"SF Pro Display Thin Italic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

