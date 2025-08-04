import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
				sans: ['AvenirNextCyr', 'ui-sans-serif', 'system-ui'],
				avenir: ['AvenirNextCyr', 'ui-sans-serif', 'system-ui']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#00938c',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#00938c',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#00938c',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#00938c',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#00938c',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: '#00938c',
					'primary-foreground': '#FFFFFF',
					accent: '#00938c',
					'accent-foreground': '#FFFFFF',
					border: 'hsl(var(--sidebar-border))',
					ring: '#00938c'
				},
				awg: {
					blue: '#00938c',
					black: '#000000',
					white: '#FFFFFF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'50%': { transform: 'scale(1.05)', opacity: '0.8' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;