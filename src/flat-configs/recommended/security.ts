import { eslintPluginSecurity } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const securityConfigs: FlatConfigs = [
  { name: 'security/recommended', ...eslintPluginSecurity.configs.recommended },
]
