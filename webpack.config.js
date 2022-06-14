const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "index": path.join(__dirname,'src/1.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
  },
  module: {
    rules:  [
      {
        test: /.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/1.html'),
    filename: 'index.html',
    path: path.join(__dirname, 'dist'),
    chunks: ["index"]
  })]
}