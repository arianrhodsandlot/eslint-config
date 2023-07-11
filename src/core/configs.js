import js from '@eslint/js'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintConfigStandard from 'eslint-config-standard'
import eslintConfigStandardWithTypescript from 'eslint-config-standard-with-typescript'
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
import { jsFiles, tsFiles } from '../lib/common.js'
import { getGitIgnores } from '../lib/utils.js'
import { overrides, overridesWithTypeChecking } from '../overrides/index.js'
import { jsOverridesRules } from '../overrides/js.js'

const tsconfig = getTsconfig()

const plugins = {
  '@typescript-eslint': eslintPluginTypescript,
  'eslint-comments': eslintPluginEslintComments,
  import: eslintPluginImport,
  n: eslintPluginN,
  prettier: eslintPluginPrettier,
  promise: eslintPluginPromise,
  security: eslintPluginSecurity,
  sonarjs: eslintPluginSonarjs,
  unicorn: eslintPluginUnicorn,
}

/** @type { import('eslint').Linter.RulesRecord } */
const pluginRules = {
  ...eslintPluginEslintComments.configs.recommended.rules,
  ...eslintPluginImport.configs.recommended.rules,
  ...eslintPluginPromise.configs.recommended.rules,
  ...eslintPluginSonarjs.configs.recommended.rules,
  ...eslintPluginTypescript.configs.recommended.rules,
  ...eslintPluginTypescript.configs.stylistic.rules,
  ...eslintPluginUnicorn.configs.recommended.rules,

  // this should be put at the last line since it turns off some other rules
  ...eslintPluginPrettier.configs.recommended.rules,
}

/** @type { import('eslint').Linter.RulesRecord } */
const sharedConfigRules = {
  ...eslintConfigStandard.rules,
  ...eslintConfigStandardWithTypescript.overrides?.[0].rules,
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

/** @type { import('eslint').Linter.RulesRecord } */
const typeCheckingRules = {
  ...eslintPluginTypescript.configs['recommended-type-checked'].rules,
  ...eslintPluginTypescript.configs['stylistic-type-checked'].rules,
}

/** @type { import('eslint').Linter.RulesRecord } */
const tsPluginWithTypeCheckingOffRules = _(eslintPluginTypescript.rules)
  .pickBy(({ meta }) => meta.docs?.requiresTypeChecking)
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
    ...jsOverridesRules,
  },
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configForTsWithTypeChecking = {
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
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configForTsWithoutTypeChecking = {
  ...configForJs,
  files: tsFiles,
}

export const configForTests = {
  files: ['test?(s)/**/*.{js,ts}?(x)'],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configForMarkdown = {
  ...eslintPluginMarkdown.configs.recommended.overrides?.[0],
  plugins: { markdown: eslintPluginMarkdown },
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configForJsInMarkdown = {
  files: eslintPluginMarkdown.configs.recommended.overrides?.[1].files,
  rules: {
    ...eslintPluginMarkdown.configs.recommended.overrides?.[1].rules,
    'no-console': 'off',

    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'import/no-unresolved': 'off',
  },
}

/** @type { import('eslint').Linter.FlatConfig } */
export const configGlobalIgnore = { ignores: getGitIgnores() }
