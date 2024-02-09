import { BuildOptions } from "./containers";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({
  isDev,
}: BuildOptions): webpack.ModuleOptions["rules"] {
  const swc = {
    test: /\.tsx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: "swc-loader",
    },
  };

  const cssCore = {
    loader: "css-loader",
    options: {
      importLoaders: 1,
      modules: {
        namedExport: true, // TODO: понять что это такое.
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const postcss = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: ["postcss-preset-env"],
      },
    },
  };

  const css = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, cssCore, postcss],
  };

  const images = {
    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/img/[hash][ext]",
    },
  };

  const fonts = {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    exclude: /node_modules/,
    type: "asset/resource",
    generator: {
      filename: "assets/fonts/[hash][ext]",
    },
  };

  return [swc, css, images, fonts];
}
