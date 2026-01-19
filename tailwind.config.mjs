/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Space Grotesk',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        // Modern fluid typography using CSS clamp()
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2.55rem + 2.25vw, 3.75rem)',
        'fluid-6xl': 'clamp(3.75rem, 3.15rem + 3vw, 4.5rem)',
      },
      lineHeight: {
        tighter: '1.1',
        snug: '1.25',
        normal: '1.5',
        relaxed: '1.625',
        loose: '1.75',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      wordSpacing: {
        normal: '0',
        wide: '0.05em',
      },
      colors: {
        // WowDash Primary Colors - WCAG AA compliant
        primary: {
          50: '#E4F1FF',
          100: '#BFDCFF',
          200: '#95C7FF',
          300: '#7AB8FF',
          400: '#6AADFF',  // Improved contrast for dark mode text
          500: '#458EFF',
          600: '#3366CC',  // Improved contrast for white text (4.5:1+)
          700: '#2952A3',
          800: '#1F3D7A',
          900: '#152951'
        },
        // Neutral Colors - Blue-tinted for dark mode consistency
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617'
        },
        slate: {
          925: '#0a0f1f',
          950: '#02040a'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#1a202c',
          900: '#111827',
          950: '#030712'
        },
        dark: {
          bg: {
            primary: '#0a0b1e',
            secondary: '#141328',
            tertiary: '#1e1b3a'
          },
          text: {
            primary: '#f8fafc',
            secondary: '#e2e8f0',
            tertiary: '#cbd5e1',
            muted: '#94a3b8'
          },
          border: {
            primary: '#334155',
            secondary: '#475569',
            accent: '#64748b'
          }
        }
      },
      screens: {
        '3xl': '1920px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}