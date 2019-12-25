module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|otf|ttf|woff2?|svg)$/,
        loader: 'file-loader',
        include: /fonts/,
        options: {
          name: `[name].[ext]`,
          outputPath: `dist/fonts`,
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        include: /images/,
        options: {
          name: `[name].[ext]`,
          outputPath: 'dist/images',
        },
      },
    ],
  },
};
