const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
//const ESLintPlugin = require("eslint-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    devtool: 'eval-source-map',
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    plugins: [
      htmlPlugin,
     /* new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      })*/
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          options: { name: "/static/[name].[ext]" },
        },
        {
          test: /\.css$/i,
          include: __dirname,//path.resolve(__dirname, 'src/styles'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };
};
