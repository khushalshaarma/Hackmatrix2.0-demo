module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f2fbfb',
          100: '#e6f7f7',
          500: '#09a8a8',
          700: '#068b8b'
        },
        neon: '#00d2ff'
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, rgba(9,168,168,0.10), rgba(0,210,255,0.06))'
      }
    }
  },
  plugins: [],
}
