const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const splitChunksConfig = require('./config-split-chunks')
const { stringifiedEnv } = require('./environment')
const { rootDir, srcDir, publicPath } = require('./paths')

module.exports = {
  entry: path.join(srcDir, 'index'),
  output: {
    path: path.join(rootDir, 'dist'),
    publicPath,
    jsonpFunction: 'webpackJsonp__demo',
  },

  optimization: {
    ...splitChunksConfig,
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        // File names matching ".ig." (eg. 'my-image.ig.png') are excluded from
        //  this loader.
        exclude: file => file.includes('.ig.'),
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(svg|eot|otf|ttf|woff2?)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': stringifiedEnv,
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(srcDir, 'static'),
      },
      {
        from: path.join(srcDir, '/locales/en.json'),
        to: 'locales.json',
      },
    ]),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
}
