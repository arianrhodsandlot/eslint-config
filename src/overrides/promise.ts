import type { Linter } from 'eslint'

export const promiseRules: Linter.RulesRecord = {
  'promise/prefer-await-to-then': 'error',
}
