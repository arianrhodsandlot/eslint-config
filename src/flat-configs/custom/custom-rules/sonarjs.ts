import type { FlatConfigRules } from '../../../types/eslint.js'

export const sonarjsRules: FlatConfigRules = {
  'sonarjs/cognitive-complexity': 'error',
  'sonarjs/no-duplicate-string': ['error', { threshold: 20 }],
}
