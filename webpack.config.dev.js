const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dist/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'messengerjs.min.js',
    path: path.resolve(__dirname, 'dist')
  }
};