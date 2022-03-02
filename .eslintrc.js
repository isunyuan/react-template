const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.tsx', '.ts', '.js', '.json'],
			},
		},
	},
	rules: {
		'import/extensions': OFF,
		'import/no-unresolved': [ERROR, { ignore: ['^@/'] }],
		'react/jsx-filename-extension': [WARN, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
		'react/function-component-definition': [ERROR, { namedComponents: 'arrow-function' }],
	},
};
