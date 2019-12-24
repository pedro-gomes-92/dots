const assetsConfig = require('./webpack.assets');
const reactConfig = require('./webpack.react');
const babelConfig = require('./webpack.babel');
const sassConfig = require('./webpack.sass');

module.exports = {
  assets: assetsConfig,
  react: reactConfig,
  babel: babelConfig,
  sass: sassConfig,
};
