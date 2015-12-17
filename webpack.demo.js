var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': [
      'angular2/core',
      './demo/src/demo.ts'
    ]
  },
  output: {
    path: __dirname + '/demo/dist',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ],
    noParse: [ /angular2\/bundles\/.+/ ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: './demo/dist',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }
};
