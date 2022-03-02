/* eslint-disable */
const CracoLessPlugin = require('craco-less');
const path = require('path');

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				modifyLessRule: (lessRule, context) => ({
					test: /\.less$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[path][name]_[local]_[hash:base64:6]',
								},
							},
						},
						'less-loader',
					],
				}),
			},
		},
	],
	webpack: {
		alias: {
			'@': pathResolve('src'),
		},
	},
};
