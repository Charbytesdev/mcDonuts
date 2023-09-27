const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "McDonuts",
      favicon: "./src/img/donut.png",
    }),
  ],
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["pngquant", { quality: [0.2, 0.2] }],
              ["mozjpeg", { quality: 20, progressive: true }],
              ["gifsicle", { interlaced: true, optimizationLevel: 3 }],
              [
                "svgo",
                {
                  plugins: [{ removeViewBox: false }],
                },
              ],
            ],
          },
        },
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
