/** @type { import('eslint').Linter.RulesRecord } */
export const unicornRules = {
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/switch-case-braces': ['error', 'avoid'],
}
