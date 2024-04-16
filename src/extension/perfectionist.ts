import type { Linter } from 'eslint'
import { jsFiles, tsFiles, vueFiles } from '../lib/common.js'
import { eslintPluginPerfectionist } from '../lib/plugins.js'

export const configForPerfectionist: Linter.FlatConfig = {
  files: [...jsFiles, ...tsFiles, ...vueFiles],

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
          'builtin',
          'external',
          ['internal-type', 'internal'],
          ['parent-type', 'parent'],
          ['sibling-type', 'sibling'],
          ['index-type', 'index'],
          'object',
          'unknown',
        ],
        'internal-pattern': ['~/**', '#/**', '@/**'],
        'newlines-between': 'never',
      },
    ],
    'perfectionist/sort-vue-attributes': 'off',
  },
}
