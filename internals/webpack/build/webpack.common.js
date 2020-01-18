const { BannerPlugin } = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { assets, babel, react, sass } = require('./configurations');
const { commandSync } = require('../../utils/command');
const CustomHookPlugin = require('../plugins/customHookPlugin');

const __root = process.cwd();
const pkg = require(`${__root}/package.json`);

const BANNER_METADATA = [
  `/*!`,
  ` * ${pkg.name} - ${pkg.description}`,
  ` * @version v${pkg.version}`,
  ` * @link ${pkg.homepage}`,
  ` * @license ${pkg.license}`,
  ` */`,
].join('\n');

const common = {
  mode: 'development',
  entry: {
    'dist/dots': `${__root}/src/dots.ts`,
  },
  output: {
    path: `${__root}/`,
    filename: '[name].js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    alias: {
      '@dots/core': `${__root}/src/core`,
      '@dots/components': `${__root}/src/components`,
      '@dots/material': `${__root}/src/material`,
      '@dots/documentation': `${__root}/src/documentation`,
    },
  },
  plugins: [
    new CustomHookPlugin({
      hook: 'beforeRun',
      callback: () => {
        commandSync('npm run prebuild:hook');
      },
    }),
    new CustomHookPlugin({
      hook: 'done',
      callback: () => {
        commandSync('npm run postbuild:hook');
      },
    }),
    new BannerPlugin({
      banner: BANNER_METADATA,
      raw: true,
      entryOnly: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
};

module.exports = merge(common, sass, react, babel, assets);
