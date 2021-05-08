const path = require('path');
module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', 
  },
  resolve: {
    extensions: ['.ts', '.js'] // import文でいちいち拡張子を指定しなくて良い
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
  },
  module: { // moduleに適応するルール
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/,
      }
    ],
  }

}