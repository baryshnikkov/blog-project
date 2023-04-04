import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = buildSvgLoader();

    const babelLoader = buildBabelLoader(options);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
