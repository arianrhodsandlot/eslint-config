import type { Linter } from 'eslint'

export const promiseRules: Linter.RulesRecord = {
  'promise/no-multiple-resolved': 'error',
  'promise/prefer-await-to-then': 'error',
}
