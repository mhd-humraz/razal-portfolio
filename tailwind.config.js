/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinematic: {
          bg: "#0A0A0A",
          dark: "#050505",
          card: "#121212",
          surface: "#181818",
          border: "#242424",
          "border-subtle": "#1A1A1A",
          "border-light": "#333333",
        },
        accent: {
          DEFAULT: "#C8FF00",
          hover: "#d6ff33",
          muted: "#9BBF0B",
          dim: "rgba(200, 255, 0, 0.12)",
          glow: "rgba(200, 255, 0, 0.25)",
        },
        film: {
          white: "#F5F5F5",
          gray: "#A3A3A3",
          muted: "#737373",
          dark: "#0A0A0A",
        }
      },
      fontFamily: {
        display: ["'Syne'", "'Space Grotesk'", "sans-serif"],
        heading: ["'Space Grotesk'", "'Inter'", "sans-serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
        tighter: "-.04em",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rec-blink': 'blink 1.2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        }
      }
    },
  },
  plugins: [],
}
