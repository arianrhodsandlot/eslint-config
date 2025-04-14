import eslintPluginCss from '@eslint/css'
import type { FlatConfigs } from '../../types/eslint.js'

export const cssConfigs: FlatConfigs = [
  {
    files: ['**/*.css'],
    language: 'css/css',
    name: 'css/css',
    ...eslintPluginCss.configs.recommended,
  },
]
