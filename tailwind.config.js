module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '640px',
      // => @media (min-width: 640px) { ... }

      tablet: '894px',

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-10)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
