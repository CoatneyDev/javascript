const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  entry: {
    main: ["./src/index.js"],
    //main: ['babel-polyfill','./src/index.js'],
    //vendor: ['babel-polyfill','./src/vendor.js']
  },
  devServer: {
    publicPath: "./src",
    contentBase: "./dist",
    watchContentBase: true,
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(html|htm)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },
};
