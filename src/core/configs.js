import js from '@eslint/js'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintConfigStandard from 'eslint-config-standard'
import eslintConfigStandardWithTypescript from 'eslint-config-standard-with-typescript'
import eslintPluginEtc from 'eslint-plugin-etc'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { getTsconfig } from 'get-tsconfig'
import globals from 'globals'
import _ from 'lodash'
import { jsFiles, tsFiles } from '../common.js'
import { overrides, overridesWithTypeChecking } from '../overrides/index.js'

/** @type { import('eslint').Linter.RulesRecord } */
const pluginRules = {
  ...eslintPluginImport.configs.recommended.rules,
  ...eslintPluginPromise.configs.recommended.rules,
  ...eslintPluginSonarjs.configs.recommended.rules,
  ...eslintPluginTypescript.configs.recommended.rules,
  ...eslintPluginUnicorn.configs.recommended.rules,
  ...eslintPluginPrettier.configs.recommended.rules,
}

/** @type { import('eslint').Linter.RulesRecord } */
const sharedConfigRules = {
  ...eslintConfigStandard.rules,
  ...eslintConfigStandardWithTypescript.overrides[0].rules,
  ...eslintConfigPrettier.rules,
}

/** @type { import('eslint').Linter.FlatConfig } */
const baseConfig = {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: true,
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

  plugins: {
    '@typescript-eslint': eslintPluginTypescript,
    etc: eslintPluginEtc,
    import: eslintPluginImport,
    n: eslintPluginN,
    prettier: eslintPluginPrettier,
    promise: eslintPluginPromise,
    security: eslintPluginSecurity,
    sonarjs: eslintPluginSonarjs,
    unicorn: eslintPluginUnicorn,
  },

  rules: {
    ...js.configs.recommended.rules,
    ...pluginRules,
    ...sharedConfigRules,
    ...overrides,
  },
}

/** @type { import('eslint').Linter.RulesRecord } */
const typeCheckingRules = {
  ...eslintPluginTypescript.configs['recommended-requiring-type-checking'].rules,
  ...eslintPluginEtc.configs.recommended.rules,
}

/** @type { import('eslint').Linter.RulesRecord } */
const tsPluginWithTypeCheckingOffRules = _(eslintPluginTypescript.rules)
  .pickBy(({ meta }) => meta.docs.requiresTypeChecking)
  .mapKeys((rule, name) => `@typescript-eslint/${name}`)
  .mapValues(() => 'off')
  .value()

/** @type { import('eslint').Linter.FlatConfig } */
export const configForJs = {
  ...baseConfig,
  files: jsFiles,
  rules: {
    ...baseConfig.rules,
    ...tsPluginWithTypeCheckingOffRules,
  },
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configForTsWithTypeChecking = {
  ...baseConfig,
  files: tsFiles,
  languageOptions: {
    ...baseConfig.languageOptions,
    parserOptions: {
      ...baseConfig.languageOptions.parserOptions,
      project: getTsconfig()?.path,
    },
  },
  rules: {
    ...baseConfig.rules,
    ...typeCheckingRules,
    ...overridesWithTypeChecking,
  },
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configForTsWithoutTypeChecking = {
  ...configForJs,
  files: tsFiles,
}
