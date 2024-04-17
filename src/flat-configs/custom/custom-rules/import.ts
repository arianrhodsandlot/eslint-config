import type { FlatConfigRules } from '../../../types/eslint.js'

export const importRules: FlatConfigRules = {
  // temporarily disabled since eslint-import-plugin does not support flat config
  // see https://github.com/import-js/eslint-plugin-import/pull/2714
  'import/default': 'off',
  'import/first': 'error',
  'import/namespace': 'off',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': ['error', { amd: false, commonjs: true, esmodule: true }],
  'import/no-duplicates': ['error', { 'prefer-inline': true }],
  'import/no-dynamic-require': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'error',
  'import/no-unresolved': 'off',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    },
  ],
}
