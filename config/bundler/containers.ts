import webpack from "webpack";

export type Mode = webpack.Configuration["mode"];

export type BuildPaths = {
  root: string;
  src: string;
  entry: string;
  build: string;
  template: string;
};

export type BuildEnv = {
  mode: Mode;
  port: number;
};

export type BuildOptions = {
  mode: Mode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  host: string;
};
