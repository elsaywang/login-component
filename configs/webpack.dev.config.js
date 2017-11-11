const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const Merge = require( 'webpack-merge' );
const CommonConfig = require( './webpack.common.js' );
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
								sourceMap: true
							}
						}, {
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			}
		]
	},
	// webpack-dev-server specfic
	devServer: {
		disableHostCheck: true,
		host: '0.0.0.0',
		port: 9000,
		historyApiFallback: true
	}
});
