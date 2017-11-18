const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    publicPath: '/',
    path: path.resolve(`${__dirname}/dist`),
    filename: 'react-starter.[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: false,
        },
      },
      {
        test: /\.jsx?/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(`${__dirname}/src/index.html`),
      hash: false,
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
};
