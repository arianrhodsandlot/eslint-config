import type { FlatConfigRules } from '../../../types/eslint.js'

export const promiseRules: FlatConfigRules = {
  'promise/always-return': ['error', { ignoreLastCallback: true }],
  'promise/no-multiple-resolved': 'error',
  'promise/prefer-await-to-then': 'error',
}
