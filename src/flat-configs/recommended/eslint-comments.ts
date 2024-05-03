import eslintPluginEslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs'
import type { FlatConfigs } from '../../types/eslint.js'

export const eslintCommentsConfigs: FlatConfigs = [
  {
    name: '@eslint-community/eslint-plugin-eslint-comments/recommended',
    ...eslintPluginEslintCommentsConfigs.recommended,
  },
]
