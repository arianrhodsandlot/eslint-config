import { eslintPluginTsdoc } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const tsdocConfigs: FlatConfigs = [
  {
    files: ['**/*.?(m|c)ts?(x)'],
    plugins: {
      tsdoc: eslintPluginTsdoc,
    },
    rules: {
      'tsdoc/syntax': 'error',
    },
  },
]
