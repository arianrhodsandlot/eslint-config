import eslintPluginCss from '@eslint/css'
import { tailwind4 } from 'tailwind-csstree'
import type { FlatConfigs } from '../../types/eslint.js'

export const cssConfigs: FlatConfigs = [
  {
    files: ['**/*.css'],
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwind4,
    },
    name: 'css/css',
    ...eslintPluginCss.configs.recommended,
  },
]
