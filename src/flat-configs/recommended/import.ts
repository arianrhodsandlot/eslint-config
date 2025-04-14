import eslintPluginImportX from 'eslint-plugin-import-x'
import type { FlatConfigs } from '../../types/eslint.js'

export const importConfigs: FlatConfigs = [
  {
    name: 'import/recommended',
    // @ts-expect-error we can assure eslintPluginImportX is a plugin
    plugins: { 'import-x': eslintPluginImportX },
    rules: eslintPluginImportX.configs.recommended.rules,
  },
]
