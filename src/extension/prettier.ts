import type { Linter } from 'eslint'
import { jsFiles, tsFiles } from '../lib/common.js'
import { eslintPluginPrettier } from '../lib/plugins.js'

const prettierConfig = {
  jsSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  semi: false,
  singleQuote: true,
}

export const configForPrettier: Linter.FlatConfig = {
  files: [...jsFiles, ...tsFiles],

  plugins: {
    prettier: eslintPluginPrettier,
  },

  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
