import type { Linter } from 'eslint'

export const nRules: Linter.RulesRecord = {
  'n/handle-callback-err': ['error', '^error$'],
  'n/no-callback-literal': 'error',
  'n/no-new-require': 'error',
  'n/no-path-concat': 'error',
  'n/prefer-global/buffer': ['error', 'never'],
  'n/prefer-global/console': 'error',
  'n/prefer-global/process': ['error', 'never'],
  'n/prefer-global/text-decoder': ['error', 'never'],
  'n/prefer-global/text-encoder': ['error', 'never'],
  'n/prefer-global/url': ['error', 'never'],
  'n/prefer-global/url-search-params': ['error', 'never'],
  'n/prefer-promises/dns': 'error',
  'n/prefer-promises/fs': 'error',
}
