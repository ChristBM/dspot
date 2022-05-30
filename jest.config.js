const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  /* moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@redux/(.*)$': '<rootDir>/redux/$1',
  }, */
}

module.exports = createJestConfig(customJestConfig)
