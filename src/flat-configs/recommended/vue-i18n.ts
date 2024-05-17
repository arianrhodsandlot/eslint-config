import { eslintPluginVueI18n } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const vueI18nConfigs: FlatConfigs = eslintPluginVueI18n.configs['flat/recommended'].filter(
  ({ name }: { name: string }) => name !== '@intlify/vue-i18n:base:setup:json',
)
