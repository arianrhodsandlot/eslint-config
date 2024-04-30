import { eslintPluginN } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const nConfigs: FlatConfigs = [{ name: 'n/recommended', ...eslintPluginN.configs['flat/recommended'] }]
