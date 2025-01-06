import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx'
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077cc",
          light: "#0099ff",
          dark: "#0055aa",
          500: "#0077cc",
        },
        "conf-black": "#0e031c",
        black: "#1b1b1b",
      }
    }
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config
