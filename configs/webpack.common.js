const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.join(__dirname, '..', 'src'),
	//SASS_DIR = path.join(__dirname,'..','styles'),
	DIST_DIR = path.join(__dirname, '..', 'dist'),
	SASS_DIST_FILE = path.join(DIST_DIR,"bundle.scss");
	console.log(SASS_DIST_FILE);
module.exports = {
	entry: [path.join(SRC_DIR, "index.js")],
	output: {
		path: DIST_DIR,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader',]
			}, {
				test: /bootstrap.+\.(jsx|js)$/,
				loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
			}, {
				test: /\.js$|\.jsx$/,
				include: SRC_DIR,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-0',]
				}
			}, {
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=/[path][name].[ext]'
			},
		]
	},
	devtool: 'source-map', // Necessary to begin to get source maps generated
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: path.join(SRC_DIR, 'index.html'),
			inject: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
	],
	// Allows aliases for import statements
	resolve: {
		alias: {
			"Config": path.join(__dirname, "api.config")
		},
		extensions: ['.js', '.jsx',]
	}
};
