/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        accent: '#F2E5C4',
      },
      textDecorationColor: {
        'primary': '#003366', 
      },
      fontFamily: {
      'mono': ['Fira Code', 'monospace']
    }
    },
    plugins: [],
  }
}

