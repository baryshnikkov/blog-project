import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin()
  ];
};