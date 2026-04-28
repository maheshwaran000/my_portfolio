import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        slate: {
          ...defaultTheme.colors?.slate,
          950: '#020617',
        }
      },
      animation: {
        'slow-drift': 'drift 30s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -40px) scale(1.1)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        }
      },
      boxShadow: {
        'premium': '0 0 0 1px rgba(0,0,0,0.03), 0 20px 50px -12px rgba(0,0,0,0.08)',
        'glow-brand': '0 0 30px -5px rgba(139, 92, 246, 0.2)',
      },
      backgroundImage: {
        'premium-gradient': 'radial-gradient(circle at top center, rgba(139, 92, 246, 0.03), transparent 50%)',
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'black\' fill-opacity=\'0.02\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};
