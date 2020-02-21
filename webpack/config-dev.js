const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { srcDir, publicPath } = require('./paths')
const { getDevLocalIdent } = require('./utils')
const baseConfig = require('./config-base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  optimization: {
    usedExports: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        include: [srcDir],
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              // cacheCompression: false
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [srcDir],
        loader: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent: getDevLocalIdent(),
              },
              importLoaders: 1,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules\/.*\/dist/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      favicon: path.join(srcDir, 'favicon.ico'),
      filename: 'index.html',
      inject: true,
      template: path.join(srcDir, 'index.html'),
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath,
      map(file) {
        // Remove dots, forward slashes, and tildes from asset manifest keys, replace them with underscores.
        return { ...file, name: file.name.replace(/(\.|\/|~)/g, '_') }
      },
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
  ],

  resolve: {
    symlinks: false,
  },
})
