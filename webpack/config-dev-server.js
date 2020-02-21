const merge = require('webpack-merge')
const configDev = require('./config-dev')
const path = require('path')
const { srcDir } = require('./paths')
const { HOST } = require('./environment')

module.exports = (env = {}) => {
  return merge(configDev, {
    devServer: {
      contentBase: path.join(srcDir, 'mock-data'),
      port: 3000,
      host: HOST || 'localhost',
      watchOptions: {
        ignored: ['node_modules'],
        aggregateTimeout: 300,
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          bypass(request) {
            if (!request.url.startsWith('/api')) return request.url

            // Serve the mocked JSON data.
            return request.url + '.json'
          },
        },
      },
    },
  })
}
