const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new htmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const cssPlugin = new miniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = (env, argv) => {
  const { mode } = argv;
  console.log(env);
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            mode === "development"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    },
    plugins: [htmlPlugin, cssPlugin],
    devServer: {
      historyApiFallback: true
    }
  };
};
