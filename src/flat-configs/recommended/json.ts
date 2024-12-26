import { eslintPluginJson } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const jsonConfigs: FlatConfigs = [
  {
    files: ['**/*.json'],
    language: 'json/json',
    ...eslintPluginJson.configs.recommended,
  },

  {
    files: ['**/*.jsonc', '.vscode/*.json'],
    language: 'json/jsonc',
    ...eslintPluginJson.configs.recommended,
  },

  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...eslintPluginJson.configs.recommended,
  },
]
