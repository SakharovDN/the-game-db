import pluginJs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import nodePlugin from 'eslint-plugin-n';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
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
	nodePlugin.configs['flat/recommended-module'],
	{
		rules: {
			'n/no-missing-import': 'off',
		},
	},
	jsdoc.configs['flat/recommended-typescript-error'],
	...eslintPluginJsonc.configs['flat/recommended-with-json'],
	perfectionistNatural,
	eslintPluginPrettierRecommended,
	{ ignores: ['coverage*', 'node_modules', '@types/resources.d.ts', 'webpack.config.js', 'build'] },
];
