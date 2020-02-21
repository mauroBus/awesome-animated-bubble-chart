const baseConfig = require('./base-config')

// eslint-disable-next-line immutable/no-mutation
module.exports = Object.assign({}, baseConfig, {
  collectCoverage: true,
})
