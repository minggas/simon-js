const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/js/main.js"],
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: ['file-loader']
      }
    ]
  }
};
