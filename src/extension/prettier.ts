import type { Linter } from 'eslint'
import type { Config } from 'prettier'
import { jsxFiles, tsxFiles } from '../lib/common.js'
import { eslintPluginPrettier } from '../lib/plugins.js'

const prettierConfig: Config = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export const configForPrettier: Linter.FlatConfig = {
  files: [...jsxFiles, ...tsxFiles],

  plugins: {
    prettier: eslintPluginPrettier,
  },

  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
