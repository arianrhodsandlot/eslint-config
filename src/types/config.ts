import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

export type FlatConfig = Linter.FlatConfig
export type FlatConfigRules = Linter.RulesRecord
export type FlatConfigPlugins = Linter.FlatConfig['plugins']

const { base: baseConfig } = tseslint.configs

export type TsFlatConfig = typeof baseConfig
export type TsFlatConfigRules = typeof baseConfig.rules
export type TsFlatConfigPlugins = typeof baseConfig.plugins
