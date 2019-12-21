const merge = require('webpack-merge');
const build = require('../build/webpack.dev.js');

module.exports = merge(build, {
  devServer: {
    public: 'dots.localhost',
    host: '0.0.0.0',
    port: 8000,
    contentBase: 'dist/',
    writeToDisk: true,
  },
});
