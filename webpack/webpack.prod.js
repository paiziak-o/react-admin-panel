const path = require('path');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new CopyPlugin([
      { from: path.resolve(__dirname, '../images'), to: path.resolve(__dirname, '../build/images') },
    ]),
  ],
});