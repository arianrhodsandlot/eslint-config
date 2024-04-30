import { eslintPluginEslintComments } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const eslintCommentsConfigs: FlatConfigs = [
  {
    name: 'eslint-comments/recommended',
    plugins: { 'eslint-comments': eslintPluginEslintComments },
    rules: eslintPluginEslintComments.configs?.recommended.rules,
  },
]
