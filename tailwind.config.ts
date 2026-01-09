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
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				heading: ['Inter', 'ui-sans-serif', 'system-ui']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2d6a4f',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#f5f5f5',
					foreground: '#111111'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#fafafa',
					foreground: '#666666'
				},
				accent: {
					DEFAULT: '#2d6a4f',
					foreground: '#ffffff'
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
					primary: '#2d6a4f',
					'primary-foreground': '#ffffff',
					accent: '#2d6a4f',
					'accent-foreground': '#ffffff',
					border: 'hsl(var(--sidebar-border))',
					ring: '#2d6a4f'
				},
				vt: {
					green: {
						'50': '#f0f9f4',
						'100': '#d9f2e3',
						'200': '#b7e4c7',
						'300': '#8ccda8',
						'400': '#52b788',
						'500': '#2d6a4f',
						'600': '#1b4332',
						'700': '#14302a',
						'800': '#0d1f1a',
						'900': '#081710'
					},
					black: '#111111',
					white: '#ffffff',
					gray: {
						'100': '#fafafa',
						'200': '#f5f5f5',
						'300': '#e5e5e5',
						'400': '#d4d4d4',
						'500': '#a3a3a3',
						'600': '#666666',
						'700': '#525252',
						'800': '#404040',
						'900': '#262626'
					}
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