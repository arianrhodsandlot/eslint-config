import { eslintPluginImport } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const importConfigs: FlatConfigs = [
  {
    plugins: { import: eslintPluginImport },
    rules: eslintPluginImport.configs?.recommended.rules,
  },
]
