/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nodo-bg': '#000000',
        'nodo-surface': '#111112',
        'nodo-surface-alt': '#171819'
      },
      fontFamily: {
        sans: ['"Overused Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        dm: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        '4xl': '32px'
      }
    }
  },
  plugins: []
};
