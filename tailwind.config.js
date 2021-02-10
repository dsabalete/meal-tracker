module.exports = {
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.blue-main.300'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.100'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'gray-main': {
          100: '#EAEDF2',
        },
        'blue-main': {
          200: '#BFDBFE',
          300: '#93C5FD',
          800: '#0d1131',
          900: '#070919',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
}
