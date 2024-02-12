import js from '@eslint/js'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import type { Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
// @ts-expect-error
import eslintConfigStandard from 'eslint-config-standard'
import eslintConfigStandardWithTypescript from 'eslint-config-standard-with-typescript'
// @ts-expect-error
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments'
// @ts-expect-error
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginMarkdown from 'eslint-plugin-markdown'
// @ts-expect-error
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPrettier from 'eslint-plugin-prettier'
// @ts-expect-error
import eslintPluginPromise from 'eslint-plugin-promise'
// @ts-expect-error
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'
// @ts-expect-error
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { getTsconfig } from 'get-tsconfig'
import globals from 'globals'
import _ from 'lodash'
import { jsFiles, tsFiles } from '../lib/common.js'
import { getGitIgnores } from '../lib/utils.js'
import { overrides, overridesWithTypeChecking } from '../overrides/index.js'
import { jsOverridesRules } from '../overrides/js.js'

const tsconfig = getTsconfig()

const plugins: Linter.FlatConfig['plugins'] = {
  // @ts-expect-error
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

const pluginRules: Linter.RulesRecord = {
  ...eslintPluginEslintComments.configs.recommended.rules,
  ...eslintPluginImport.configs.recommended.rules,
  ...eslintPluginPromise.configs.recommended.rules,
  ...eslintPluginSonarjs.configs.recommended.rules,
  ...eslintPluginTypescript.configs.recommended.rules,
  ...eslintPluginTypescript.configs.stylistic.rules,
  ...eslintPluginUnicorn.configs.recommended.rules,

  // this should be put at the last line since it turns off some other rules
  ...(eslintPluginPrettier.configs?.recommended as Linter.FlatConfig).rules,
}

const sharedConfigRules: Linter.RulesRecord = {
  ...eslintConfigStandard.rules,
  ...eslintConfigStandardWithTypescript.overrides?.[0].rules,
  ...eslintConfigPrettier.rules,
}

const baseConfig: Linter.FlatConfig = {
  languageOptions: {
    // @ts-expect-error
    parser: tsParser,
    parserOptions: {
      // @ts-expect-error
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

// @ts-expect-error
const typeCheckingRules: Linter.RulesRecord = {
  ...eslintPluginTypescript.configs['recommended-type-checked'].rules,
  ...eslintPluginTypescript.configs['stylistic-type-checked'].rules,
}

// @ts-expect-error
const tsPluginWithTypeCheckingOffRules: Linter.RulesRecord = _(eslintPluginTypescript.rules)
  .pickBy(({ meta }) => meta.docs?.requiresTypeChecking)
  .mapKeys((rule, name) => `@typescript-eslint/${name}`)
  .mapValues(() => 'off')
  .value()

export const configForJs: Linter.FlatConfig = {
  ...baseConfig,
  files: jsFiles,
  rules: {
    ...baseConfig.rules,
    ...tsPluginWithTypeCheckingOffRules,
    ...jsOverridesRules,
  },
}

export const configForTsWithTypeChecking: Linter.FlatConfig = {
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

export const configForTsWithoutTypeChecking: Linter.FlatConfig = {
  ...configForJs,
  files: tsFiles,
}

export const configForTests: Linter.FlatConfig = {
  files: ['test?(s)/**/*.{js,ts}?(x)'],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

// @ts-expect-error unknown type for the markdown plugin
const [markdownOverride, jsInMarkdownOverride] = eslintPluginMarkdown.configs.recommended.overrides
export const configForMarkdown: Linter.FlatConfig = {
  ...markdownOverride,
  plugins: { markdown: eslintPluginMarkdown },
}

export const configForJsInMarkdown: Linter.FlatConfig = {
  files: jsInMarkdownOverride.files,
  rules: {
    ...jsInMarkdownOverride.rules,
    'no-console': 'off',

    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'import/no-unresolved': 'off',
  },
}

export const configGlobalIgnore: Linter.FlatConfig = { ignores: getGitIgnores() }
