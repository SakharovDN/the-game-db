import pluginJs from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import nodePlugin from 'eslint-plugin-n';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// TODO: install eslint-plugin-import,
// eslint-plugin-react-hooks,
// eslint-plugin-jsx-a11y,
// eslint-plugin-jest,
// eslint-plugin-promise,
// eslint-plugin-unused-imports

export default [
	{
		ignores: ['coverage*', 'node_modules'],
		languageOptions: { globals: globals.browser },
		linterOptions: { reportUnusedDisableDirectives: 'error' },
		settings: {
			version: 'detect',
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	{ rules: { 'react/jsx-uses-react': 'off', 'react/react-in-jsx-scope': 'off', 'react/self-closing-comp': 'error' } },
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			'unicorn/no-static-only-class': 'off',
			'unicorn/prevent-abbreviations': 'off',
		},
	},
	nodePlugin.configs['flat/recommended-module'],
	{
		rules: {
			'n/no-missing-import': 'off',
		},
	},
	comments.recommended,
	jsdoc.configs['flat/recommended-typescript-error'],
	...eslintPluginJsonc.configs['flat/recommended-with-json'],
	perfectionistNatural,
	eslintPluginPrettierRecommended,
];
