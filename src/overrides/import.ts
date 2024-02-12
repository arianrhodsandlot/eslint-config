import type { Linter } from 'eslint'

export const importRules: Linter.RulesRecord = {
  'import/newline-after-import': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-absolute-path': 'error',
  'import/no-duplicates': 'error',
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    },
  ],

  // temporarily disabled since eslint-import-plugin does not support flat config
  // see https://github.com/import-js/eslint-plugin-import/pull/2714
  'import/default': 'off',
  'import/namespace': 'off',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
}
