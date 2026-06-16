module.exports = {
  clearMocks: true,
  testMatch: ['**/__tests__/**/*.{js,ts}?(x)', '**/*.test.{js,ts}?(x)'],
  modulePathIgnorePatterns: [
    '<rootDir>/packages/*.*/dist/*.*',
    '<rootDir>/packages/*.*/public/*.*',
    '<rootDir>/packages/*.*/.cache/*.*'
  ],
  roots: ['<rootDir>/packages'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  // Transpile @patternfly/* ESM in node_modules; extend the (?!...) group if another
  // dependency ships untranspiled ESM that Jest must transform.
  transformIgnorePatterns: ['/node_modules/(?!(@patternfly)/)'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js',
    '\\.svg$': '<rootDir>/styleMock.js'
  },
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['./jest.setup-after-env.js']
};
