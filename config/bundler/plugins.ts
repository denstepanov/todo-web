import { BuildOptions } from "./containers";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  isDev,
  paths,
}: BuildOptions): webpack.Configuration["plugins"] {
  const isProd = !isDev;

  const plugins: webpack.Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.template,
    }),
    new DotenvWebpackPlugin({
      path: isDev ? `${paths.root}/dev.env` : `${paths.root}/prod.env`,
      allowEmptyValues: false,
    }),
    new MiniCssExtractPlugin(),
  ];

  if (isDev) {
    plugins.push(
      ...[
        new webpack.ProgressPlugin(),
        new DotenvWebpackPlugin({
          path: `${paths.root}/dev.env`,
          allowEmptyValues: false,
        }),
      ],
    );
  }

  if (isProd) {
    plugins.push(
      ...[
        new DotenvWebpackPlugin({
          path: `${paths.root}/prod.env`,
          allowEmptyValues: false,
        }),
        // new CopyPlugin()
      ],
    );
  }

  return plugins;
}
