const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WebpackBar = require('webpackbar')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const safePostCssParser = require('postcss-safe-parser')
const { srcDir, publicPath } = require('./paths')
const baseConfig = require('./config-base')

module.exports = merge(baseConfig, {
  mode: 'production',
  bail: true,
  devtool: 'hidden-source-map',

  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.relative(srcDir, info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },

  module: {
    strictExportPresence: false,
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
                localIdentName: '[hash:base64:5]',
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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeOptionalTags: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath,
      map(file) {
        // Remove dots, forward slashes, and tildes from asset manifest keys, replace them with underscores.
        return { ...file, name: file.name.replace(/(\.|\/|~)/g, '_') }
      },
    }),
  ],
})
