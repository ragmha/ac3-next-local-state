const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.jest')

module.exports = {
  verbose: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/test/utils/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  }),
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fifteen',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  moduleDirectories: ['node_modules', 'utils', 'utils/test', __dirname],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
}