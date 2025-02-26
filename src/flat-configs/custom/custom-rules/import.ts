import type { FlatConfigRules } from '../../../types/eslint.js'

export const importRules: FlatConfigRules = {
  'import-x/default': 'off',
  'import-x/extensions': ['error', 'always', { ignorePackages: true }],
  'import-x/first': 'error',
  'import-x/namespace': 'off',
  'import-x/newline-after-import': 'error',
  'import-x/no-absolute-path': ['error', { amd: false, commonjs: true, esmodule: true }],
  'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
  'import-x/no-dynamic-require': 'error',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-extraneous-dependencies': 'error',
  'import-x/no-named-as-default': 'off',
  'import-x/no-named-as-default-member': 'off',
  'import-x/no-named-default': 'error',
  'import-x/no-unresolved': 'off',
  'import-x/no-useless-path-segments': 'off',
  'import-x/no-webpack-loader-syntax': 'error',
  'import-x/order': [
    'error',
    {
      alphabetize: { order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      'newlines-between': 'never',
    },
  ],
}
