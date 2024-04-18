import tseslint from 'typescript-eslint'
import { eslintPluginVue, eslintPluginVuejsAccessibility, eslintPluginVueScopedCSS } from '../../lib/eslint-plugins.js'
import { isLegacyVue } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const configName = `flat/${isLegacyVue ? 'vue2-' : ''}recommended`
const recommendedConfigs = [...eslintPluginVue.configs[configName], ...eslintPluginVueScopedCSS.configs[configName]]

export const vueConfigs: FlatConfigs = [
  ...recommendedConfigs,

  {
    plugins: { 'vuejs-accessibility': eslintPluginVuejsAccessibility },
    rules: eslintPluginVuejsAccessibility.configs.recommended.rules,
  },
]

const [, { languageOptions }] = vueConfigs
if (languageOptions) {
  languageOptions.parserOptions = {
    ...languageOptions.parserOptions,
    parser: tseslint.parser,
  }
}
