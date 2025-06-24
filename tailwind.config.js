module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#e5a145',
        'dark-bg': '#040404',
        'secondary-dark': '#1c1c1b',
        'graphite': '#2c0e09',
        'irish-coffee': '#5e3b28',
        'korma': '#8e400e',
        'friar-gray': '#7c7c7b',
        'boulder': '#747474',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(10)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
