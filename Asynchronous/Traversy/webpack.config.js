const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // if you would put other js file to be imported to index.js, for example print.js :
    // print: './src/print.js',
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
};
