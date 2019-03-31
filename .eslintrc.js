module.exports = {
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': './tsconfig.json'
	},
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
		'no-console': 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
