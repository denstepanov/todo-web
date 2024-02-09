import webpack from "webpack";
import { BuildOptions, BuildEnv, BuildPaths } from "./containers";
import * as path from "path";
import { buildLoaders } from "./loaders";
import { buildPlugins } from "./plugins";
import { buildResolvers } from "./resolvers";
import { buildDevServer } from "./devServer";

export default (env: BuildEnv): webpack.Configuration => {
  const root: string[] = [__dirname, "../", "../"];

  const paths: BuildPaths = {
    root: path.resolve(...root),
    entry: path.resolve(...root, "src", "index.tsx"),
    build: path.resolve(...root, "build"),
    template: path.resolve(...root, "public", "index.html"),
    src: path.resolve(...root, "src"),
  };

  const mode: string = env.mode!;
  const port: number = env.port;
  const isDev: boolean = mode === "development";

  return buildWebpack({
    mode,
    paths,
    isDev,
    port,
  } as BuildOptions);
};

function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: { rules: buildLoaders(options) },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devtool: isDev && "inline-source-map",
    devServer: buildDevServer(options),
  };
}
