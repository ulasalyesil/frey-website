/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      slideDown: {
        from: { maxHeight: 0 },
        to: { maxHeight: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { maxHeight: 'var(--radix-accordion-content-height)' },
        to: { maxHeight: 0 },
      },
    },
    animation: {
      slideDown: 'slideDown 150ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },
  },
  plugins: [],
}
