import { eslintPluginTailwindcss } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const tailwindcssConfigs: FlatConfigs = eslintPluginTailwindcss.configs['flat/recommended']
