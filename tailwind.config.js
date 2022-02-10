module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  safelist: [
    {
      pattern: /font-(black|bold|normal|thin)/,
    },
  ],
  theme: {
    fontFamily: {
      sans: ['Trim'],
      mono: ['Trim Mono'],
    },
    extend: {
      colors: {
        dark: {
          100: '#292929',
          200: '#2e2e2e',
          300: '#121212',
        },
        grey: {
          100: '#dddddd',
          200: '#a29bb6',
          300: '#f4f6ff',
          400: '#414853',
        },
        'highlight-on': '#1cffc0',
        'highlight-off': '#18e2aa',
      },
    },
  },
  variants: {},
  plugins: [],
}
