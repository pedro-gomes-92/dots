module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.(tsx|jsx)$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx'],
  },
  externals: {
    react: 'react',
  },
};
