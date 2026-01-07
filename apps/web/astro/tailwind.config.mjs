import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Astro.build inspired colors
        astro: {
          purple: '#7c3aed',
          blue: '#3b82f6',
          indigo: '#6366f1',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          // Astro.build style: purple/blue gradient accent
          primary: '#7c3aed', // Purple
          
          secondary: '#6b7280', // Gray
          
          accent: '#3b82f6', // Blue
          
          neutral: '#1f2937', // Dark gray
          
          // Pure white background like astro.build
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#f3f4f6',
          
          // Almost black text
          'base-content': '#0a0a0a',
          
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      {
        dark: {
          primary: '#a78bfa', // Lighter purple for dark
          
          secondary: '#9ca3af',
          
          accent: '#60a5fa', // Lighter blue
          
          neutral: '#e5e7eb',
          
          // Dark background
          'base-100': '#0a0a0a',
          'base-200': '#1a1a1a',
          'base-300': '#2a2a2a',
          
          // Almost white text
          'base-content': '#fafafa',
          
          info: '#60a5fa',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: false,
    themeRoot: ':root',
  },
}
