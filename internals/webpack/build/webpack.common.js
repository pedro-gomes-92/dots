const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CustomHookPlugin = require('../plugins/customHookPlugin');
const { BannerPlugin } = require('webpack');
const path = require('path');
const { commandSync } = require('../../utils/command');

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

module.exports = {
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
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['sass-loader'],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff2?)$/,
        include: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `[name].[ext]`,
              outputPath: `dist/fonts`,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        include: /icons/,
        options: {
          name: `[name].[ext]`,
          outputPath: `dist/icons`,
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        include: /images/,
        options: {
          name: `[name].[ext]`,
          outputPath: 'images',
        },
      },
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.(tsx?|jsx?)$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@dots/core': `${__root}/src/core`,
      '@dots/components': `${__root}/src/components`,
      '@dots/material': `${__root}/src/material`,
      '@dots/documentation': `${__root}/src/documentation`,
    },
  },
  externals: {
    react: 'react',
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new BannerPlugin({
      banner: BANNER_METADATA,
      raw: true,
      entryOnly: true,
    }),
  ],
};
