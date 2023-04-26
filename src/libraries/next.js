import eslintPluginNext from '@next/eslint-plugin-next'
import { jsxFiles, tsxFiles } from '../lib/common.js'

/** @type { import('eslint').Linter.FlatConfig } */
export const configForNext = {
  files: [...jsxFiles, ...tsxFiles],

  plugins: {
    '@next/next': eslintPluginNext,
  },

  rules: {
    ...eslintPluginNext.configs.recommended.rules,
    ...eslintPluginNext.configs['core-web-vitals'].rules,
  },
}
