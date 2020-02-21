const path = require('path')
const rootDir = path.resolve(__dirname, '..')
const srcDir = path.join(rootDir, 'src')
const publicPath = '/'

module.exports = {
  rootDir,
  srcDir,
  publicPath,
}
