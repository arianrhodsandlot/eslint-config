import tseslint from 'typescript-eslint'
import vueEslintParser from 'vue-eslint-parser'
import { eslintPluginVue } from '../lib/plugins.js'
import { getPackageVersion } from '../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../types/config.js'

const vueVersion = getMajorVersion(getPackageVersion('vue'))
function getMajorVersion(version: string) {
  let major = ''
  for (const char of version) {
    if (Number.parseInt(char, 10)) {
      major += char
    } else if (major) {
      return Number.parseInt(major, 10)
    }
  }
  return Number.parseInt(major, 10)
}

const isVue2 = vueVersion === 2
const configName = isVue2 ? 'flat/vue2-recommended' : 'flat/recommended'
const pluginConfig = eslintPluginVue.configs[configName]

const configsForVue = tseslint.config(...pluginConfig, {
  rules: {
    'vue/attributes-order': 'error',
    'vue/block-lang': ['error', { script: { lang: 'ts' }, style: { lang: 'scss' } }],
    'vue/block-order': 'error',
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/component-options-name-casing': 'error',
    'vue/define-macros-order': 'error',
    'vue/define-props-declaration': 'error',
    'vue/dot-notation': 'error',
    'vue/enforce-style-attribute': 'error',
    'vue/eqeqeq': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/match-component-import-name': 'error',
    'vue/new-line-between-multi-line-property': 'error',
    'vue/next-tick-style': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-child-content': 'error',
    'vue/no-constant-condition': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-ref-object-reactivity-loss': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: [
          'client-only',
          'el(\\-\\w+)+',
          'mara(\\-\\w+)+',
          'el(\\-\\w+)+',
          'router(\\-\\w+)+',
          'van(\\-\\w+)+',
        ],
      },
    ],
    'vue/no-undef-properties': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-html': 'off',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-template': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-macro-variable-name': 'error',
    'vue/require-name-property': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-v-for-key': 'off',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-handler-style': 'error',
  },
}) as FlatConfigs

if (isVue2) {
  const vue2Rules: FlatConfigRules = {
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
  }
  configsForVue.push({ rules: vue2Rules })
} else {
  const nonVue2Rules: FlatConfigRules = {
    'vue/component-api-style': 'error',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
  }
  configsForVue.push({ rules: nonVue2Rules })
}

configsForVue.push({
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueEslintParser,
    parserOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
    },
  },
})

export { configsForVue }
