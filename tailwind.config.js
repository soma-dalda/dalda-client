module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '640px',
      tablet: '894px',
      desktop: '1280px',
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

        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(-10)',
          },
        },

        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
      },
      colors: {
        brand: {
          100: '#FAEBF3',
          300: '#F2CFE3',
          500: '#E56FB4',
          700: '#C03586',
          900: '#701F4E',
        },
        point: {
          300: '#C6CDEB',
          500: '#687BCA',
          700: '#354898',
        },
        grayScale: {
          100: '#F7F8F9',
          200: '#E8EBED',
          300: '#C9CDD2',
          400: '#ABB3BB',
          500: '#9DA7B0',
          600: '#72787F',
          700: '#454C53',
          800: '#26282B',
          900: '#131415',
        },
        border: {
          200: '#ECEFF2',
          400: '#E6E9EB',
          600: '#C9CDD2',
          800: '#BDC3CA',
        },
        danger: {
          300: '#FFBDBD',
          500: '#F84343',
          700: '#CF0D0D',
        },
        success: {
          300: '#C6EFD2',
          500: '#38C782',
          700: '#2FA280',
        },
      },
    },
  },
  plugins: [],
}
