import eslintPluginNext from '@next/eslint-plugin-next'
import type { FlatConfigs } from '../../types/eslint.js'

export const nextConfigs: FlatConfigs = [
  {
    name: 'next/recommended',
    plugins: { '@next/next': eslintPluginNext },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
    },
  },
]
