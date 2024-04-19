import type { FlatConfig, FlatConfigRules, FlatConfigs } from './eslint.js'

export interface CreateConfigOptions {
  /** append custom flat configs to default */
  append?: FlatConfig | FlatConfigs
  compat?: boolean
  diff?: boolean
  eslintComments?: boolean
  import?: boolean
  jsdoc?: boolean
  markdown?: boolean
  n?: boolean
  /** Should Next related plugins and rules be enabled */
  next?: boolean
  perfectionist?: boolean
  /** prepend custom flat configs to default */
  prepend?: FlatConfig | FlatConfigs
  prettier?: boolean
  promise?: boolean
  /** Should React related plugins and rules be enabled */
  react?: boolean
  regexp?: boolean
  rules?: FlatConfigRules
  security?: boolean
  sonarjs?: boolean
  tsdoc?: boolean
  typescript?: boolean
  unicorn?: boolean
  /** Should Vue related plugins and rules be enabled */
  vue?: boolean
}
