/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cinema: {
          dark: '#0c0d12',
          card: '#161822',
          border: '#262938',
          accent: '#e11d48',
          screen: '#1e2230',
        },
      },
      animation: {
        'float-up': 'floatUp 3s ease-out forwards',
        'pop-in': 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'pulse-glow': 'pulseGlow 3s infinite',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '1' },
          '50%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-140px) scale(1.4)', opacity: '0' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(225, 29, 72, 0.25)' },
          '50%': { boxShadow: '0 0 70px rgba(225, 29, 72, 0.45)' },
        },
      },
    },
  },
  plugins: [],
};
