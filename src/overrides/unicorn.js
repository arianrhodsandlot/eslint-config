/** @type { import('eslint').Linter.RulesRecord } */
export const unicornRules = {
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
  'unicorn/switch-case-braces': ['error', 'avoid'],
}
