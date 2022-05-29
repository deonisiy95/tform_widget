const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = () => (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.tsx'],
  output: {path: path.join(__dirname, 'dist'), filename: 'bundle.js'},
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "widget.css",
  })],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: 'global',
                localIdentName: isDevelopment()
                  ? '[name]__[local]___[hash:base64:5]'
                  : '[local]__[hash:base64:5]'
              }
            }
          },
          'less-loader',
        ],
      }
    ]
  }
};
