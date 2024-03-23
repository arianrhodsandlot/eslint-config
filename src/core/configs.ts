import js from '@eslint/js'
import type { Linter } from 'eslint'
import eslintConfigLove from 'eslint-config-love'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintConfigStandard from 'eslint-config-standard'
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginMarkdown from 'eslint-plugin-markdown'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { getTsconfig } from 'get-tsconfig'
import globals from 'globals'
import _ from 'lodash'
import tseslint from 'typescript-eslint'
import { jsFiles, tsFiles } from '../lib/common.js'
import { getGitIgnores } from '../lib/utils.js'
import { overrides, overridesWithTypeChecking } from '../overrides/index.js'
import { jsOverridesRules } from '../overrides/js.js'
import type { FlatConfig, FlatConfigPlugins, FlatConfigRules, TsFlatConfigRules } from '../types/config.js'

const tsconfig = getTsconfig()

const plugins: FlatConfigPlugins = {
  // @ts-expect-error
  '@typescript-eslint': tseslint.plugin,
  'eslint-comments': eslintPluginEslintComments,
  import: eslintPluginImport,
  n: eslintPluginN,
  prettier: eslintPluginPrettier,
  promise: eslintPluginPromise,
  security: eslintPluginSecurity,
  sonarjs: eslintPluginSonarjs,
  unicorn: eslintPluginUnicorn,
}

/* eslint-disable unicorn/no-array-reduce */
const eslintPluginTypescriptRecommendedRules = tseslint.configs.recommended
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }), {}).rules
const eslintPluginTypescriptStylisticRules = tseslint.configs.stylistic
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }), {}).rules
const eslintPluginTypescriptRecommendedTypeCheckedRules = tseslint.configs.recommendedTypeChecked
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }), {}).rules
const eslintPluginTypescriptStylisticTypeCheckedRules = tseslint.configs.stylisticTypeChecked
  .filter(({ rules }) => rules)
  .reduce((acc, { rules }) => ({ ...acc, ...rules }), {}).rules
/* eslint-enable unicorn/no-array-reduce */

const pluginRules: Linter.RulesRecord = {
  ...eslintPluginEslintComments.configs?.recommended.rules,
  ...eslintPluginImport.configs?.recommended.rules,
  ...eslintPluginPromise.configs?.recommended.rules,
  ...eslintPluginSonarjs.configs?.recommended.rules,
  ...eslintPluginTypescriptRecommendedRules,
  ...eslintPluginTypescriptStylisticRules,
  ...eslintPluginUnicorn.configs?.recommended.rules,

  // this should be put at the last line since it turns off some other rules
  ...(eslintPluginPrettier.configs?.recommended as FlatConfig).rules,
}

const sharedConfigRules: FlatConfigRules = {
  ...eslintConfigStandard.rules,
  ...eslintConfigLove.rules,
  ...eslintConfigPrettier.rules,
}

const baseConfig: FlatConfig = {
  languageOptions: {
    // @ts-expect-error
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true,
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.builtin,
      ...globals.commonjs,
      ...globals.node,
      ...globals.serviceworker,
    },
  },

  linterOptions: {
    reportUnusedDisableDirectives: true,
  },

  plugins,

  rules: {
    ...js.configs.recommended.rules,
    ...pluginRules,
    ...sharedConfigRules,
    ...overrides,
  },

  settings: {
    'import/resolver': {
      typescript: Boolean(tsconfig),
      node: true,
    },
    'import/extensions': [...jsFiles, ...tsFiles, '.json'],
  },
}

const typeCheckingRules: TsFlatConfigRules = {
  ...eslintPluginTypescriptRecommendedTypeCheckedRules,
  ...eslintPluginTypescriptStylisticTypeCheckedRules,
}

// @ts-expect-error
const tsPluginWithTypeCheckingOffRules: Linter.RulesRecord = _(tseslint.plugin.rules)
  // @ts-expect-error
  .pickBy(({ meta }) => meta.docs?.requiresTypeChecking)
  .mapKeys((rule, name) => `@typescript-eslint/${name}`)
  .mapValues(() => 'off')
  .value()

export const configForJs: FlatConfig = {
  ...baseConfig,
  files: jsFiles,
  rules: {
    ...baseConfig.rules,
    ...tsPluginWithTypeCheckingOffRules,
    ...jsOverridesRules,
  },
}

export const configForTsWithTypeChecking: FlatConfig = {
  ...baseConfig,
  files: tsFiles,
  languageOptions: {
    ...baseConfig.languageOptions,
    parserOptions: {
      ...baseConfig.languageOptions?.parserOptions,
      project: tsconfig?.path,
    },
  },
  // @ts-expect-error
  rules: {
    ...baseConfig.rules,
    ...typeCheckingRules,
    ...overridesWithTypeChecking,
  },
}

export const configForTsWithoutTypeChecking: FlatConfig = {
  ...configForJs,
  files: tsFiles,
}

export const configForTests: FlatConfig = {
  files: ['test?(s)/**/*.{js,ts}?(x)'],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

export const configsForMarkdown = eslintPluginMarkdown.configs.recommended as FlatConfig[]
configsForMarkdown.push({
  files: ['**/*.md/*.js'],
  rules: {
    'no-console': 'off',

    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'import/no-unresolved': 'off',
  },
})

export const configGlobalIgnore: FlatConfig = { ignores: getGitIgnores() }
