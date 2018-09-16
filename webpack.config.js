const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputDir = 'dist';

module.exports = {
	entry: path.join(__dirname, "frontend/index.js"),
	output: {
		path: path.join(__dirname, outputDir),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|svg)$/,
				loader: 'url-loader?limit=100000',
				options: {
					fallback: 'file-loader'
				}
			}
		]
	},
	devServer: {
		port: 3000,
		open: true,
		proxy: {
			'/api': 'http://localhost:8080'
		}
	},
	plugins: [
		new CleanWebpackPlugin([outputDir]),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};