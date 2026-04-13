import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        paper: '#F7F1E3',
        ink: '#1F2937',
        wood: '#8B5A2B',
      },
      boxShadow: {
        paper: '0 12px 35px rgba(31,41,55,.12)',
      },
      backgroundImage: {
        parchment: 'radial-gradient(circle at 20% 20%, #FFFDF7 0%, #F7F1E3 55%, #EFE2C4 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
