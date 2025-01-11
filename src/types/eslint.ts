import type { Linter } from 'eslint'

export interface FlatConfig extends Linter.Config {
  name?: string
}
export type FlatConfigs = Linter.Config[]
export type FlatConfigRules = Linter.RulesRecord
export type FlatConfigPlugins = NonNullable<Linter.Config['plugins']>
