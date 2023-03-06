/** @type { import('prettier').Config } */
const prettierConfig = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
}

/** @type { import('eslint').Linter.RulesRecord } */
export const prettierRules = {
  'prettier/prettier': ['error', prettierConfig],
}
