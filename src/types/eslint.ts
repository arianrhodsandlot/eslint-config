import type { Linter } from 'eslint'

export interface FlatConfig extends Linter.FlatConfig {
  name?: string
}
export type FlatConfigs = Linter.FlatConfig[]
export type FlatConfigRules = Linter.RulesRecord
export type FlatConfigPlugins = NonNullable<Linter.FlatConfig['plugins']>
