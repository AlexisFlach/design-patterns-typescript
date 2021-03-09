const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // multiple entry points
  // format = [output path]: [input path]
  entry: {
    "./Behavioral/StrategyPattern/dist/bundle":
      "./Behavioral/StrategyPattern/src/index.ts",
    "./Behavioral/Observer/dist/bundle": "./Behavioral/Observer/src/index.ts",
    "./Behavioral/DecoratorPattern/dist/bundle":
      "./Behavioral/DecoratorPattern/src/index.ts",
    "./Creational/Factory/dist/bundle": "./Creational/Factory/src/index.ts",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname + "/"),
  },
};
