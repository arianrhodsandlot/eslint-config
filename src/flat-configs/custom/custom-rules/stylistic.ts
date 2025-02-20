import type { FlatConfigRules } from '../../../types/eslint.ts'

export const stylisticRules: FlatConfigRules = {
  '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
}
