import type { Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import { jsFiles, tsFiles } from '../lib/common.js'
import { eslintPluginPrettier } from '../lib/plugins.js'
import { getPackageVersion } from '../lib/utils.js'

const plugins = []
if (getPackageVersion('prettier-plugin-tailwindcss')) {
  plugins.push('prettier-plugin-tailwindcss')
}

const prettierConfig = {
  jsSingleQuote: true,
  plugins,
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
    ...eslintConfigPrettier.rules,
  },
}
