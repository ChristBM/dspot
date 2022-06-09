// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
};

module.exports = createJestConfig(customJestConfig);
