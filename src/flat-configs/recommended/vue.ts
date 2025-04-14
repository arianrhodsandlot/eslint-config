import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css'
import eslintPluginVuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import tseslint from 'typescript-eslint'
import { isLegacyVue } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const configName = `flat/${isLegacyVue ? 'vue2-' : ''}recommended`
const recommendedConfigs = [
  ...eslintPluginVue.configs[configName],
  ...eslintPluginVueScopedCSS.configs[configName],
].map((config) => ({ name: 'vue/recommended', ...config }))

const vueConfigs: FlatConfigs = [
  ...recommendedConfigs,

  {
    name: 'vuejs-accessibility/recommended',
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

export { vueConfigs }
