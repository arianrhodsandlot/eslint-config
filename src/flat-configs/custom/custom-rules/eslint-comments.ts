import type { FlatConfigRules } from '../../../types/eslint.js'

export const eslintCommentsRules: FlatConfigRules = {
  '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
}
