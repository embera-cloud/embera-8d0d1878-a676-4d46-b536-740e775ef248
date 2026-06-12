import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0514',
        'brand-slate': '#10111f',
        'brand-purple': '#8e44ad',
        'brand-purple-light': '#a052c8',
        'brand-gold': '#f1c40f',
        'brand-gold-light': '#f39c12',
        'brand-blue': '#3498db',
        'brand-text': '#dcdde1',
        'brand-text-dark': '#95a5a6',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-cinzel)'],
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 15px 5px rgba(142, 68, 173, 0.4)',
        'glow-gold': '0 0 15px 5px rgba(241, 196, 15, 0.4)',
        'glow-blue': '0 0 15px 5px rgba(52, 152, 219, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;