import type { Linter } from 'eslint'
import type { Config } from 'prettier'

const prettierConfig: Config = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export const prettierRules: Linter.RulesRecord = {
  'prettier/prettier': ['error', prettierConfig],
}
