module.exports = {
  moduleNameMapper: {
    '^.+/(.*\\.svg)\\?inline$': '<rootDir>/assets/icons/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    'vue-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
        plugins: ['@babel/plugin-syntax-dynamic-import'],
        env: {
          test: {
            plugins: ['dynamic-import-node'],
          },
        },
      },
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
