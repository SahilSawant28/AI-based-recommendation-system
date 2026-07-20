import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium gradient colors
        'gradient-start': '#7c3aed',
        'gradient-mid': '#06b6d4',
        'gradient-end': '#0ea5e9',
        'accent-purple': '#a855f7',
        'accent-cyan': '#06b6d4',
        'accent-blue': '#3b82f6',
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(168, 85, 247, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(168, 85, 247, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
