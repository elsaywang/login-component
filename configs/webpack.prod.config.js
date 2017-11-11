const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
module.exports = Merge(CommonConfig, {
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: CommonConfig.SRC_DIR,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: true,
							},
						}, {
							loader: 'sass-loader',
							options: {
								sourceMap: true
							},
						},
					]
				}),
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				keep_fnames: true
			},
			comments: false,
			sourceMap: true,
		})],
});
