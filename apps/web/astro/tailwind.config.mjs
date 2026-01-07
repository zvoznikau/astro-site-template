import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#1c4e80',
          secondary: '#7c909a',
          accent: '#ea6947',
          neutral: '#23282e',
          'base-100': '#ffffff',
          'base-200': '#f5f5f5',
          'base-300': '#e5e5e5',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      {
        dark: {
          primary: '#1c4e80',
          secondary: '#7c909a',
          accent: '#ea6947',
          neutral: '#1a1a1a',
          'base-100': '#1a1a1a',
          'base-200': '#2a2a2a',
          'base-300': '#3a3a3a',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
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
