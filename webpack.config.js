var path = require('path');

module.exports = {
	entry: './src/app/index.js',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			}, {
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]___[hash:base64:5]'
				}
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'src/dist')
	}
}