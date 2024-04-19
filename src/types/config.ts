import type { FlatConfig, FlatConfigRules, FlatConfigs } from './eslint.js'

export interface CreateConfigOptions {
  /** Append custom flat configs to default */
  append?: FlatConfig | FlatConfigs

  /** Should eslint-plugin-compat be enabled */
  compat?: boolean

  /** Should eslint-plugin-diff be enabled */
  diff?: boolean

  /** Should eslint-plugin-eslint-comments be enabled */
  eslintComments?: boolean

  /** Should eslint-plugin-import be enabled */
  import?: boolean

  /** Should eslint-plugin-jsdoc be enabled */
  jsdoc?: boolean

  /** Should eslint-plugin-markdown be enabled */
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
}
