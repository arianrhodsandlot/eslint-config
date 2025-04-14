import eslintPluginTsdoc from 'eslint-plugin-tsdoc'
import type { FlatConfigs } from '../../types/eslint.js'

export const tsdocConfigs: FlatConfigs = [
  {
    files: ['**/*.?(m|c)ts?(x)'],
    name: 'tsdoc/recommended',
    plugins: {
      tsdoc: eslintPluginTsdoc,
    },
    rules: {
      'tsdoc/syntax': 'error',
    },
  },
]
