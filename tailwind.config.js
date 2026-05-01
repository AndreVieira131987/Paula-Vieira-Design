/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#9E6B72',
        secondary: '#d1c8c0',
        dark: '#2d322f',
        light: '#ebedea',
        surface: '#f4f6f3',
        accent: '#E3DDD7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      animation: {
        floating: 'floating 6s ease-in-out infinite',
        sonar: 'sonarWave 2s infinite cubic-bezier(0.16, 1, 0.3, 1)',
        slideUp: 'slideUpBlur 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fillWidth: 'fillWidth 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        sonarWave: {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        slideUpBlur: {
          '0%': { opacity: '0', transform: 'translateY(30px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        fillWidth: {
          '0%': { width: '0%' },
          '100%': { width: '75%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
