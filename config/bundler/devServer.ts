import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./containers";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    hot: options.isDev,
    compress: !options.isDev,
    open: true,
  };
}
