module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/tmp',
    filename: './bundle.js',
    publicPath: '/tmp/'
  },
  devServer: {
    contentBase: "./app",
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
