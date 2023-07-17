/** @type { import('prettier').Config } */
const prettierConfig = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

/** @type { import('eslint').Linter.RulesRecord } */
export const prettierRules = {
  'prettier/prettier': ['error', prettierConfig],
}
