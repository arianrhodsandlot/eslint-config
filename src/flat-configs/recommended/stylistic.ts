import eslintPluginStylistic from '@stylistic/eslint-plugin'
import type { FlatConfigs } from '../../types/eslint.js'

export const stylisticConfigs: FlatConfigs = [
  {
    ...eslintPluginStylistic.configs.recommended,
    rules: {},
  },
]
