import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        brilliant: ['Brilliant', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [],
}

export default config