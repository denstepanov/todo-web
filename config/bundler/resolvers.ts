import { BuildOptions } from "./containers";
import webpack from "webpack";

export function buildResolvers({
  paths,
}: BuildOptions): webpack.Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
    alias: {
      "@src": paths.src,
    },
  };
}
