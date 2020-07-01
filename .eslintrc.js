module.exports = {
	'env': {
		'browser': true,
		'es2020': true,
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 11,
		'sourceType': 'module',
	},
	'rules': {
		// 'indent': [
		// 	'error',
		// 	'tab',
		// ],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'always',
		],
		'comma-dangle': [
			'error', 
			'always-multiline',
		],
	},
};
