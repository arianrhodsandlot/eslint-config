import tailwindcss from 'prettier-plugin-tailwindcss'

/** @type { import('prettier').Config } */
const prettierConfig = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [tailwindcss],
}

/** @type { import('eslint').Linter.RulesRecord } */
export const prettierRules = {
  'prettier/prettier': ['error', prettierConfig],
}
