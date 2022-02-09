module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  safelist: [
    {
      pattern: /font-(black|bold|normal|thin)/,
    },
  ],
  theme: {
    fontFamily: {},
    extend: {},
  },
  variants: {},
  plugins: [],
}
