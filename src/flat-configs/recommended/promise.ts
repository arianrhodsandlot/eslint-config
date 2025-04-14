import eslintPluginPromise from 'eslint-plugin-promise'
import type { FlatConfigs } from '../../types/eslint.js'

export const promiseConfigs: FlatConfigs = [
  {
    name: 'promise/recommended',
    plugins: { promise: eslintPluginPromise },
    rules: eslintPluginPromise.configs?.recommended.rules,
  },
]
