import type { Linter } from 'eslint'
import { jsFiles, tsFiles } from '../lib/common.js'
import { eslintPluginPerfectionist } from '../lib/plugins.js'

export const configForPerfectionist: Linter.FlatConfig = {
  files: [...jsFiles, ...tsFiles],

  plugins: {
    perfectionist: eslintPluginPerfectionist,
  },

  rules: {
    'import/order': 'off',
    ...eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        'internal-pattern': ['~/**', '#/**', '@/**'],
        'newlines-between': 'never',
      },
    ],
  },
}
