import { eslintPluginImport } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const importConfigs: FlatConfigs = [
  {
    name: 'import/recommended',
    plugins: { import: eslintPluginImport },
    rules: eslintPluginImport.configs?.recommended.rules,
  },
]
