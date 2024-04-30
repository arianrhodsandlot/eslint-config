import { eslintPluginSonarjs } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const sonarjsConfigs: FlatConfigs = [
  {
    name: 'sonarjs/recommended',
    plugins: { sonarjs: eslintPluginSonarjs },
    rules: eslintPluginSonarjs.configs?.recommended.rules,
  },
]
