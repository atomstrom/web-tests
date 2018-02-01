exports.config = {
  tests: './tests/*_test.js',
  timeout: 10000,
  output: './output-tests',
  helpers: {
    WebDriverIO: {
      url: 'http://web:3000',
      browser: 'firefox',
      host: 'standalone-firefox'
    },
  },
  name: 'web-testing'
};