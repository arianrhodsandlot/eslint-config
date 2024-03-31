import js from '@eslint/js'
import type { Linter } from 'eslint'
import { getTsconfig } from 'get-tsconfig'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { jsFiles, tsFiles } from '../lib/common.js'
import {
  eslintPluginEslintComments,
  eslintPluginImport,
  eslintPluginN,
  eslintPluginPromise,
  eslintPluginSecurity,
  eslintPluginSonarjs,
  eslintPluginUnicorn,
} from '../lib/plugins.js'
import { getGitIgnores } from '../lib/utils.js'
import { overrides, overridesWithTypeChecking } from '../overrides/index.js'
import { jsOverridesRules } from '../overrides/js.js'
import type { FlatConfigRules, FlatConfigs } from '../types/config.js'

const tsconfig = getTsconfig()

const plugins = {
  '@typescript-eslint': tseslint.plugin,
  'eslint-comments': eslintPluginEslintComments,
  import: eslintPluginImport,
  n: eslintPluginN,
  promise: eslintPluginPromise,
  security: eslintPluginSecurity,
  sonarjs: eslintPluginSonarjs,
  unicorn: eslintPluginUnicorn,
}

/* eslint-disable unicorn/no-array-reduce, @typescript-eslint/consistent-type-assertions */
const eslintPluginTypescriptRecommendedRules = tseslint.configs.recommended
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }) as FlatConfigRules, {} as FlatConfigRules)
const eslintPluginTypescriptStylisticRules = tseslint.configs.stylistic
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }) as FlatConfigRules, {} as FlatConfigRules)
const eslintPluginTypescriptRecommendedTypeCheckedRules = tseslint.configs.recommendedTypeChecked
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }) as FlatConfigRules, {} as FlatConfigRules)
const eslintPluginTypescriptStylisticTypeCheckedRules = tseslint.configs.stylisticTypeChecked
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }) as FlatConfigRules, {} as FlatConfigRules)
/* eslint-enable unicorn/no-array-reduce, @typescript-eslint/consistent-type-assertions */

const pluginRules: Linter.RulesRecord = {
  ...eslintPluginEslintComments.configs?.recommended.rules,
  ...eslintPluginImport.configs?.recommended.rules,
  ...eslintPluginN.configs['flat/recommended'].rules,
  ...eslintPluginPromise.configs?.recommended.rules,
  ...eslintPluginSonarjs.configs?.recommended.rules,
  ...eslintPluginTypescriptRecommendedRules,
  ...eslintPluginTypescriptStylisticRules,
  ...eslintPluginUnicorn.configs?.recommended.rules,
  ...tseslint.configs.disableTypeChecked.rules,
}

const baseConfig = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.builtin,
      ...globals.commonjs,
      ...globals.node,
      ...globals.serviceworker,
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true,
        jsx: true,
      },
    },
  },

  plugins,

  rules: {
    ...js.configs.recommended.rules,
    ...pluginRules,
    ...overrides,
  },

  settings: {
    'import/extensions': [...jsFiles, ...tsFiles, '.json'],
    'import/resolver': {
      node: true,
      typescript: Boolean(tsconfig),
    },
  },
}

const typeCheckingRules = {
  ...eslintPluginTypescriptRecommendedTypeCheckedRules,
  ...eslintPluginTypescriptStylisticTypeCheckedRules,
}

export const globalConfig = tseslint.config({
  ignores: getGitIgnores(),
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
}) as FlatConfigs

export const configForJsAndTs = tseslint.config(
  {
    ...baseConfig,
    files: [...jsFiles, ...tsFiles],
    rules: {
      ...baseConfig.rules,
    },
  },
  {
    files: jsFiles,
    rules: {
      ...jsOverridesRules,
    },
  },
) as FlatConfigs

export const configForTsWithTypeChecking = tseslint.config({
  ...baseConfig,
  files: tsFiles,
  languageOptions: {
    ...baseConfig.languageOptions,
    parserOptions: {
      ...baseConfig.languageOptions?.parserOptions,
      project: tsconfig?.path,
    },
  },
  rules: {
    ...baseConfig.rules,
    ...typeCheckingRules,
    ...overridesWithTypeChecking,
  },
}) as FlatConfigs

export const configForTests = tseslint.config({
  files: ['test?(s)/**/*.{js,ts}?(x)'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-empty-pattern': 'off',
  },
}) as FlatConfigs
