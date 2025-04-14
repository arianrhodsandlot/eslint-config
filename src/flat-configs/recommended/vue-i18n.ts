import eslintPluginVueI18n from '@intlify/eslint-plugin-vue-i18n'
import type { FlatConfigs } from '../../types/eslint.js'

export const vueI18nConfigs: FlatConfigs = eslintPluginVueI18n.configs['flat/recommended'].filter(
  ({ name }: { name: string }) =>
    !['@intlify/vue-i18n:base:setup:json', '@intlify/vue-i18n:base:setup:yaml'].includes(name),
)
