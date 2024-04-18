import type { FlatConfigs } from '../../types/eslint.js'

export const markdownConfigs: FlatConfigs = [
  {
    files: ['**/*.md/*.js'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',

      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-unresolved': 'off',
      'n/no-missing-import': 'off',

      'no-console': 'off',
    },
  },
]
