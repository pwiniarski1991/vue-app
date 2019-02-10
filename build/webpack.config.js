'use strict'

const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';

const config = {
  mode: 'development',
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   filename: 'bundle.js'
  // },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              //modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              sourceMap,
            },
          }
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
    extensions: [
      '.js',
      '.vue'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/images'),
      to: path.resolve(__dirname, '../dist/static/img'),
      toType: 'dir'
    }]),
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
        reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
        cssModules: true // if you use cssModules, this can help.
      }
    )
  ]
};

// new webpack.optimize.LimitChunkCountPlugin({
//   maxChunks: 1
// })

module.exports = config;