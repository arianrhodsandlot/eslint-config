import type { FlatConfigRules } from '../../../types/eslint.js'

export const promiseRules: FlatConfigRules = {
  'promise/no-multiple-resolved': 'error',
  'promise/prefer-await-to-then': 'error',
}
