import { eslintPluginUnicorn } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const unicornConfigs: FlatConfigs = [eslintPluginUnicorn.configs['flat/recommended']]
