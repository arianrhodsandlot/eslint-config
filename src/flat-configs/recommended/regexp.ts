import eslintPluginRegexp from 'eslint-plugin-regexp'
import type { FlatConfigs } from '../../types/eslint.js'

export const regexpConfigs: FlatConfigs = [
  { name: 'regexp/recommended', ...eslintPluginRegexp.configs['flat/recommended'] },
]
