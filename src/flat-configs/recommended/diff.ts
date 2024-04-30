import { eslintPluginDiff } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const diffConfigs: FlatConfigs = [
  {
    name: 'diff',
    plugins: { diff: eslintPluginDiff },
    processor: 'diff/diff',
  },
]
