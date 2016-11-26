var webpack = require("webpack");

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
  devtool: 'eval-source-map',
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
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
};
