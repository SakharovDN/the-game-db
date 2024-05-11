// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
	const envMode = env.development ? 'development' : 'production';
	const isProduction = envMode === 'production';
	const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

	return {
		mode: envMode,
		devServer: {
			client: {
				progress: true,
			},
			historyApiFallback: true,
			host: 'localhost',
			hot: true,
			open: true,
			port: 3000,
			static: {
				directory: path.join(__dirname, 'public'),
			},
		},
		devtool: 'inline-source-map',
		entry: './src/index.tsx',
		module: {
			rules: [
				{
					exclude: ['/node_modules/'],
					loader: 'ts-loader',
					test: /\.(ts|tsx)$/i,
				},
				{
					test: /\.s[ac]ss$/i,
					use: [stylesHandler, 'css-loader', 'sass-loader'],
				},
				{
					test: /\.css$/i,
					use: [stylesHandler, 'css-loader'],
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
					type: 'asset',
				},
			],
		},
		output: {
			clean: true,
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public/index.html'),
			}),
			new Dotenv({ path: `./.env.${envMode}` }),
			...(isProduction ? [new MiniCssExtractPlugin(), new WorkboxWebpackPlugin.GenerateSW()] : []),
		],
		resolve: {
			extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
		},
	};
};
