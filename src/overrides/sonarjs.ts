import type { Linter } from 'eslint'

export const sonarjsRules: Linter.RulesRecord = {
  'sonarjs/no-duplicate-string': ['error', { threshold: 20 }],
}
