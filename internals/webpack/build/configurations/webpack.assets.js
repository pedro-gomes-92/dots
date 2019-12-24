module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|otf|ttf|woff2?)$/,
        loader: 'file-loader',
        include: /fonts/,
        options: {
          name: `[name].[ext]`,
          outputPath: `dist/fonts`,
        },
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
          outputPath: 'dist/images',
        },
      },
    ],
  },
};
