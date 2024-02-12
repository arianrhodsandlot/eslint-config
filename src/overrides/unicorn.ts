import type { Linter } from 'eslint'

export const unicornRules: Linter.RulesRecord = {
  'unicorn/no-null': 'off',
  'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/switch-case-braces': ['error', 'avoid'],
}
