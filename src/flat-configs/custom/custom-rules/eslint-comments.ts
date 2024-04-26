import type { FlatConfigRules } from '../../../types/eslint.js'

export const eslintCommentsRules: FlatConfigRules = {
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
}
