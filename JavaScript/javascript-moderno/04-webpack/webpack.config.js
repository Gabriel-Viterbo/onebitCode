const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: { main: './src/index.js', hello: './src/hello.js' },
  // output: {
  //   path: path.resolve(__dirname, 'public'),
  //   filename: '[name].bundle.min.js',
  // },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
