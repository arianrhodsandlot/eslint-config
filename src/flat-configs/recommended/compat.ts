import { eslintPluginCompat } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const compatConfigs: FlatConfigs = [
  {
    name: 'compat',
    plugins: { compat: eslintPluginCompat },
    rules: eslintPluginCompat.configs?.recommended.rules,
  },
]
