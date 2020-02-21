const path = require('path')

// eslint-disable-next-line immutable/no-mutation
module.exports = {
  browser: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.js',
    '!src/**/__tests__/**',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text-summary', 'lcovonly'],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 95,
      statements: 95,
    },
  },
  moduleDirectories: ['node_modules', path.join(__dirname, '..', 'test')],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    // Replace external CSS files with an empty module.
    '^(?!\\.).+\\.css$': '<rootDir>/jest/empty-module.js',
    // Convert internal CSS modules to an identity object.+
    '\\.css$': 'identity-obj-proxy',
  },
  rootDir: '../',
  setupFiles: ['<rootDir>/jest/setup.js', '<rootDir>/jest/enzyme-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '/__tests__/.*.(test|spec).(js|ts)x?$',
  testURL: 'http://localhost:8000/',
  transform: {
    '\\.(js|tsx?)$': 'babel-jest',
    '\\.(png|gif|jpe?g|svg)$': '<rootDir>/jest/url-loader-transformer.js',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    ['jest-watch-toggle-config', { setting: 'verbose' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
  ],
}
