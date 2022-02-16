module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  safelist: [
    {
      pattern: /font-(black|bold|normal|thin)/,
    },
    {
      pattern: /(divide|text|stroke)-(white|highlight-on)/,
    },
    {
      pattern: /(bg)-(grey|dark)-(100|200|300)/,
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
        orangeish: '#ff645f',
        'highlight-on': '#1cffc0',
        'highlight-off': '#18e2aa',
      },
    },
  },
  variants: {},
  plugins: [],
}
