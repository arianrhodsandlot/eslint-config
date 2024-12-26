import { eslintPluginImportX } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const importConfigs: FlatConfigs = [
  {
    name: 'import/recommended',
    plugins: { 'import-x': eslintPluginImportX },
    rules: eslintPluginImportX.configs.recommended.rules,
  },
]
