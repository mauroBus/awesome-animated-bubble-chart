module.exports = {
  // Automatically split vendor and commons
  // https://twitter.com/wSokra/status/969633336732905474
  // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
  splitChunks: {
    chunks: 'all',
    name: false,
    cacheGroups: {
      // Add other vendors to split them if needed.
      vendors: {
        automaticNamePrefix: 'vendors',
        name: true,
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
    },
  },
  // Keep the runtime chunk seperated to enable long term caching
  // https://twitter.com/wSokra/status/969679223278505985
  runtimeChunk: true,
}
