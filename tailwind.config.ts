import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        exo: ["Exo", "sans-serif"], // futuriste pour les titres (optionnel)
      },
      colors: {
        // QVT Box charte mise à jour selon logo
        "qvt-turquoise": "#00EFC2",   // turquoise fluo du logo
        "qvt-glacier": "#7CE2FF",     // bleu glacier
        "qvt-dark": "#4B4E78",        // fond violet foncé
        "qvt-bubble": "#E1FDFE",      // bulle douce
        "qvt-off-white": "#F2F7F6",
        "qvt-soft-black": "#212121",
        "qvt-teal": "#005B5F",

        // Palette émotionnelle 1-15 (burnout à passion)
        "emotion-burnout": "hsl(0, 75%, 35%)",
        "emotion-stress": "hsl(15, 70%, 45%)",
        "emotion-tension": "hsl(35, 65%, 55%)",
        "emotion-neutral": "hsl(60, 40%, 65%)",
        "emotion-content": "hsl(120, 50%, 55%)",
        "emotion-fulfilled": "hsl(180, 60%, 50%)",
        "emotion-passion": "hsl(280, 70%, 60%)",

        // Design system standard avec couleurs fixes (pas de CSS var ici)
        border: "#D7E0DC",
        input: "#EAEFED",
        ring: "#00EFC2",
        background: "#F2F7F6",
        foreground: "#212121",
        primary: {
          DEFAULT: "#00EFC2",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#7CE2FF",
          foreground: "#1e1e1e",
        },
        destructive: {
          DEFAULT: "#e4572e",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#E0F0ED",
          foreground: "#212121",
        },
        accent: {
          DEFAULT: "#4B4E78",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#212121",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#212121",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        bubble: "2rem",
      },
      boxShadow: {
        bubble: "0 8px 32px rgba(0, 91, 95, 0.15)",
        "bubble-lg": "0 20px 64px rgba(0, 91, 95, 0.2)",
      },
      animation: {
        "bubble-float": "bubbleFloat 6s ease-in-out infinite",
        "bubble-float-delayed": "bubbleFloat 6s ease-in-out infinite 2s",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        bubbleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        "qvt-gradient-primary": "linear-gradient(135deg, #00EFC2, #7CE2FF)",
        "qvt-gradient-secondary": "linear-gradient(135deg, #7CE2FF, #A4D4AE)",
        "qvt-gradient-teens":
          "linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
        "emotion-gradient":
          "linear-gradient(90deg, hsl(0, 75%, 35%), hsl(15, 70%, 45%), hsl(35, 65%, 55%), hsl(60, 40%, 65%), hsl(120, 50%, 55%), hsl(180, 60%, 50%), hsl(280, 70%, 60%))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
