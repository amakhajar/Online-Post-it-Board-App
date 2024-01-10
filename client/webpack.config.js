const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname,"src","index.html"),
  title: "Test"
});
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "bundle.js"
    },
    plugins: [
      htmlPlugin,
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),
    ],
    module: {
      rules: [
        {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
            exclude: /node_modules/,
           
            resolve: {
                extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
              },
              
              
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: { name: '/static/[name].[ext]' }
          },
          {
            test: /\.css$/i,
        use: "css-loader",
          }
          
          
      ]
    }
  };
};