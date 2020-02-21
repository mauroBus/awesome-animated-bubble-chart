const path = require('path')

// eslint-disable-next-line immutable/no-mutation
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')({
      url(asset, dir) {
        const relative = path.posix.normalize(
          path.relative(dir.to, asset.absolutePath)
        )
        // This is to address a windows specific error on getting relative path images in css
        const posixPath = relative.replace(/\\/g, '/')
        return `./${posixPath}${asset.search}${asset.hash}`
      },
    }),
    require('postcss-cssnext')({
      // browsers pulled from browerslist in package.json
    }),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')(),
  ],
}
