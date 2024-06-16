import pluginJs from '@eslint/js';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
  {
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
    },
  },
  perfectionistNatural,
  {
    rules: {
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          'custom-groups': {
            type: {
              react: ['react'],
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'type',
            'react',
            'nanostores',
            'builtin',
            'external',
            'internal-type',
            'internal',
            'parent',
            'parent-type',
            'sibling-type',
            'sibling',
            'index-type',
            'index',
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ['coverage*', 'node_modules', 'dist'],
  },
];
