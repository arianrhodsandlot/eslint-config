import eslintPluginJson from '@eslint/json'
import type { FlatConfigs } from '../../types/eslint.js'

export const jsonConfigs: FlatConfigs = [
  {
    files: ['**/*.json'],
    language: 'json/json',
    name: 'json/json',
    ...eslintPluginJson.configs.recommended,
  },

  {
    files: ['**/*.jsonc', '.vscode/*.json'],
    language: 'json/jsonc',
    name: 'json/jsonc',
    ...eslintPluginJson.configs.recommended,
  },

  {
    files: ['**/*.json5'],
    language: 'json/json5',
    name: 'json/json5',
    ...eslintPluginJson.configs.recommended,
  },
]
