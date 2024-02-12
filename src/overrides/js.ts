import type { Linter } from 'eslint'

export const jsOverridesRules: Linter.RulesRecord = {
  '@typescript-eslint/no-var-requires': 'off',
  'unicorn/prefer-module': 'off',
}
