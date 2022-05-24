const path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.tsx'],
  output: {path: path.join(__dirname, 'dist'), filename: 'index.js'},
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader']
      }
    ]
  }
};
