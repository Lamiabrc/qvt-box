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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				// QVT Box charte graphique
				'qvt-teal': 'hsl(183, 100%, 19%)',        // #005B5F
				'qvt-off-white': 'hsl(150, 20%, 96%)',   // #F2F7F6  
				'qvt-soft-black': 'hsl(0, 0%, 13%)',     // #212121
				'qvt-aqua': 'hsl(180, 45%, 65%)',        // Vert eau
				'qvt-light-blue': 'hsl(200, 80%, 75%)',  // Bleu clair
				
				// Palette émotionnelle 1-15 (burnout à passion)
				'emotion-burnout': 'hsl(0, 75%, 35%)',    // 1-3
				'emotion-stress': 'hsl(15, 70%, 45%)',    // 4-6  
				'emotion-tension': 'hsl(35, 65%, 55%)',   // 7-9
				'emotion-neutral': 'hsl(60, 40%, 65%)',   // 10-11
				'emotion-content': 'hsl(120, 50%, 55%)',  // 12-13
				'emotion-fulfilled': 'hsl(180, 60%, 50%)', // 14
				'emotion-passion': 'hsl(280, 70%, 60%)',   // 15

				// Design system standard
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'bubble': '2rem', // Formes arrondies inspirées des bulles
			},
			boxShadow: {
				'bubble': '0 8px 32px rgba(0, 91, 95, 0.15)',
				'bubble-lg': '0 20px 64px rgba(0, 91, 95, 0.2)',
			},
			animation: {
				'bubble-float': 'bubbleFloat 6s ease-in-out infinite',
				'bubble-float-delayed': 'bubbleFloat 6s ease-in-out infinite 2s',
				'pulse-slow': 'pulse 3s infinite',
			},
			backgroundImage: {
				'qvt-gradient-primary': 'linear-gradient(135deg, hsl(183, 100%, 19%), hsl(180, 45%, 65%))',
				'qvt-gradient-secondary': 'linear-gradient(135deg, hsl(180, 45%, 65%), hsl(200, 80%, 75%))',
				'qvt-gradient-teens': 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
				'emotion-gradient': 'linear-gradient(90deg, hsl(0, 75%, 35%), hsl(15, 70%, 45%), hsl(35, 65%, 55%), hsl(60, 40%, 65%), hsl(120, 50%, 55%), hsl(180, 60%, 50%), hsl(280, 70%, 60%))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
