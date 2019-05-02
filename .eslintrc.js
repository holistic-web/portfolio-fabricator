
// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true
	},
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: ['plugin:vue/essential', 'airbnb-base'],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// check if imports actually resolve
	settings: {
		'import/resolver': {
			webpack: {
				config: 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here
	rules: {
		'comma-dangle': [2, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'linebreak-style': 0,
		'padded-blocks': 0,
		indent: [1, 'tab'],
		'no-underscore-dangle': [2, { allow: ['_id', '__v'] }],
		'no-param-reassign': [2, { props: false }],
		'new-cap': [2, { capIsNewExceptions: ['Router', 'ObjectId'] }],
		'no-tabs': 0,
		'max-len': [1, 140], // extended
		'no-plusplus': 0, // disabled

		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never'
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			optionalDependencies: ['test/unit/index.js']
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0

	}
};
