import { eslintPluginUnicorn } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const unicornConfigs: FlatConfigs = [
  { name: 'unicorn/recommended', ...eslintPluginUnicorn.configs['flat/recommended'] },
]
