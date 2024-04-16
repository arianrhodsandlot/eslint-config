import process from 'node:process'
import js from '@eslint/js'
import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'
import {
  eslintPluginEslintComments,
  eslintPluginImport,
  eslintPluginN,
  eslintPluginPromise,
  eslintPluginSonarjs,
  eslintPluginUnicorn,
} from '../lib/plugins.js'
import { overrides } from '../overrides/index.js'
import type { FlatConfigRules } from '../types/config.js'

export const isProduction = process.env.NODE_ENV === 'production'

export const jsxFiles = ['**/*.{jsx,mjsx,cjsx}']
export const jsFiles = ['**/*.{js,mjs,cjs}', ...jsxFiles]
export const tsxFiles = ['**/*.{tsx,mtsx,ctsx}']
export const tsFiles = ['**/*.{ts,mts,cts}', ...tsxFiles]
export const vueFiles = ['**/*.vue']

export const parserOptions = {
  ecmaFeatures: {
    globalReturn: true,
    jsx: true,
  },
}
/* eslint-disable unicorn/no-array-reduce, @typescript-eslint/consistent-type-assertions */
const eslintPluginTypescriptRecommendedRules = tseslint.configs.recommended
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }) as FlatConfigRules, {} as FlatConfigRules)
const eslintPluginTypescriptStylisticRules = tseslint.configs.stylistic
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }) as FlatConfigRules, {} as FlatConfigRules)
/* eslint-enable unicorn/no-array-reduce, @typescript-eslint/consistent-type-assertions */

const pluginRules: Linter.RulesRecord = {
  ...eslintPluginEslintComments.configs?.recommended.rules,
  ...eslintPluginImport.configs?.recommended.rules,
  ...eslintPluginN.configs['flat/recommended'].rules,
  ...eslintPluginPromise.configs?.recommended.rules,
  // ...eslintPluginSecurity.configs.recommended.rules,
  ...eslintPluginSonarjs.configs?.recommended.rules,
  ...eslintPluginTypescriptRecommendedRules,
  ...eslintPluginTypescriptStylisticRules,
  ...eslintPluginUnicorn.configs?.recommended.rules,
  ...tseslint.configs.disableTypeChecked.rules,
}
export const rules = {
  ...js.configs.recommended.rules,
  ...pluginRules,
  ...overrides,
}
