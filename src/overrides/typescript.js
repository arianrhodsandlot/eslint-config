/** @type { import('eslint').Linter.RulesRecord } */
export const typescriptRules = {
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    { multiline: { delimiter: 'none' }, singleline: { delimiter: 'semi', requireLast: false } },
  ],
  '@typescript-eslint/member-ordering': ['error'],
  '@typescript-eslint/no-empty-function': [
    'error',
    { allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions', 'overrideMethods'] },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-shadow': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/prefer-includes': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/unified-signatures': 'error',
}
