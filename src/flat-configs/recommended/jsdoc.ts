import { eslintPluginJsdoc } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const jsdocConfigs: FlatConfigs = [eslintPluginJsdoc.configs['flat/recommended']]
