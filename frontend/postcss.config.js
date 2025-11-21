module.exports = {
  plugins: {
    // 1. Must load Tailwind first
    // FIX: Changed 'tailwindcss' to '@tailwindcss/postcss' to resolve the PostCSS integration error.
    "@tailwindcss/postcss": {},
    // 2. Must load Autoprefixer second
    autoprefixer: {},
  },
};