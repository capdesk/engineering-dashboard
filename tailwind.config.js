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
      pattern: /(bg)-(grey|dark)-(100|200|300|400)/,
    },
  ],
  theme: {
    fontFamily: {
      sans: ['Trim'],
      mono: ['Trim Mono'],
      inter: ['Inter'],
    },
    extend: {
      colors: {
        dark: {
          100: '#292929',
          200: '#2e2e2e',
          300: '#121212',
          400: '#292929',
        },
        grey: {
          100: '#dddddd',
          200: '#a29bb6',
          300: '#f4f6ff',
          400: '#414853',
        },
        tealish: {
          100: '#1CFFC0',
          200: '#0FB7C9',
          300: '#0C98A7',
          400: '#002545',
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
