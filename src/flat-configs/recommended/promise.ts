import { eslintPluginPromise } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const promiseConfigs: FlatConfigs = [
  {
    plugins: { promise: eslintPluginPromise },
    rules: eslintPluginPromise.configs?.recommended.rules,
  },
]
