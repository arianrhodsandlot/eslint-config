import eslintPluginSonarjs from 'eslint-plugin-sonarjs'
import type { FlatConfigs } from '../../types/eslint.js'

export const sonarjsConfigs: FlatConfigs = [
  {
    name: 'sonarjs/recommended',
    ...eslintPluginSonarjs.configs.recommended,
  },
]
