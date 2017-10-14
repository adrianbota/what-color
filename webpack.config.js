const path = require('path');

module.exports = {
  entry: {
    background: './src/extension/background.js',
    content: './src/page/content.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'what-color-[name].js'
  }
};
