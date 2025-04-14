import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'
import type { FlatConfigs } from '../../types/eslint.js'

export const tailwindcssConfigs: FlatConfigs = eslintPluginTailwindcss.configs['flat/recommended']
