import type { FlatConfig, FlatConfigRules, FlatConfigs } from './eslint.js'

type EsXConfigName =
  | 'no-new-in-es2015'
  | 'no-new-in-es2016-intl-api'
  | 'no-new-in-es2016'
  | 'no-new-in-es2017-intl-api'
  | 'no-new-in-es2017'
  | 'no-new-in-es2018-intl-api'
  | 'no-new-in-es2018'
  | 'no-new-in-es2019'
  | 'no-new-in-es2020-intl-api'
  | 'no-new-in-es2020'
  | 'no-new-in-es2021-intl-api'
  | 'no-new-in-es2021'
  | 'no-new-in-es2022-intl-api'
  | 'no-new-in-es2022'
  | 'no-new-in-es2023-intl-api'
  | 'no-new-in-es2023'
  | 'no-new-in-es5'
  | 'no-new-in-esnext'
  | 'restrict-to-es-intl-api-1st-edition'
  | 'restrict-to-es2015-intl-api'
  | 'restrict-to-es2015'
  | 'restrict-to-es2016-intl-api'
  | 'restrict-to-es2016'
  | 'restrict-to-es2017-intl-api'
  | 'restrict-to-es2017'
  | 'restrict-to-es2018-intl-api'
  | 'restrict-to-es2018'
  | 'restrict-to-es2019-intl-api'
  | 'restrict-to-es2019'
  | 'restrict-to-es2020-intl-api'
  | 'restrict-to-es2020'
  | 'restrict-to-es2021-intl-api'
  | 'restrict-to-es2021'
  | 'restrict-to-es2022-intl-api'
  | 'restrict-to-es2022'
  | 'restrict-to-es3'
  | 'restrict-to-es5'

export interface CreateConfigOptions {
  /** Append custom flat configs to default */
  append?: FlatConfig | FlatConfigs

  /** Should eslint-plugin-biome-x be enabled */
  biomeX?: boolean

  /** Should \@eslint/css be enabled */
  css?: boolean

  /** Should eslint-plugin-compat be enabled */
  compat?: boolean

  /** Should eslint-plugin-diff be enabled */
  diff?: boolean

  /** Should eslint-plugin-eslint-comments be enabled */
  eslintComments?: boolean

  /**
   * Which configs should be used
   * @see https://eslint-community.github.io/eslint-plugin-es-x/configs/
   */
  esX?: boolean | EsXConfigName | EsXConfigName[]

  /** Should eslint-plugin-import be enabled */
  import?: boolean

  /** Should eslint-plugin-jsdoc be enabled */
  jsdoc?: boolean

  /** Should \@eslint/json be enabled */
  json?: boolean

  /** Should \@eslint/markdown be enabled */
  markdown?: boolean

  /** Should eslint-plugin-n be enabled */
  n?: boolean

  /** Should \@next/eslint-plugin-next be enabled */
  next?: boolean

  /** Should eslint-plugin-perfectionist be enabled */
  perfectionist?: boolean

  /** Append custom flat configs to default */
  prepend?: FlatConfig | FlatConfigs

  /** Should eslint-plugin-prettier be enabled */
  prettier?: boolean

  /** Should eslint-plugin-promise be enabled */
  promise?: boolean

  /** Should eslint-plugin-react, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh be enabled */
  react?: boolean

  /** Should eslint-plugin-regexp be enabled */
  regexp?: boolean

  /** Custom rules */
  rules?: FlatConfigRules

  /** Should eslint-plugin-security be enabled */
  security?: boolean

  /** Should \@stylistic/eslint-plugin be enabled */
  stylistic?: boolean

  /** Should eslint-plugin-tailwindcss be enabled */
  tailwindcss?: boolean

  /** Should eslint-plugin-sonarjs be enabled */
  sonarjs?: boolean

  /** Should eslint-plugin-tsdoc be enabled */
  tsdoc?: boolean

  /** Should \@typescript-eslint/eslint-plugin be enabled */
  typescript?: boolean

  /** Should eslint-plugin-unicorn be enabled */
  unicorn?: boolean

  /** Should eslint-plugin-vue, eslint-plugin-vuejs-accessibility, eslint-plugin-vue-scoped-css be enabled */
  vue?: boolean

  /** Should \@intlify/eslint-plugin-vue-i18n be enabled */
  vueI18n?: boolean
}
