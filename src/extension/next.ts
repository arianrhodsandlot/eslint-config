// @ts-expect-error
import eslintPluginNext from '@next/eslint-plugin-next'
import type { Linter } from 'eslint'
import { jsFiles, tsFiles } from '../lib/common.js'

export const configForNext: Linter.FlatConfig = {
  files: [...jsFiles, ...tsFiles],

  plugins: {
    '@next/next': eslintPluginNext,
  },

  rules: {
    ...eslintPluginNext.configs.recommended.rules,
    ...eslintPluginNext.configs['core-web-vitals'].rules,
  },
}
