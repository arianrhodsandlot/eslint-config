import { eslintPluginEslintComments } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const eslintCommentsConfigs: FlatConfigs = [
  {
    plugins: { 'eslint-comments': eslintPluginEslintComments },
    rules: eslintPluginEslintComments.configs?.recommended.rules,
  },
]
