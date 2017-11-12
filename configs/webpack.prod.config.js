const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
	plugins: [new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				keep_fnames: true
			},
			comments: false,
			sourceMap: true,
		})]
});
