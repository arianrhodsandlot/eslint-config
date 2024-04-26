import { getContext, isLegacyVue, isPackageInstalled } from '../../../lib/utils.js'
import type { FlatConfigRules } from '../../../types/eslint.js'

const vueLegacyRules: FlatConfigRules = {
  'vue/component-api-style': isPackageInstalled('@vue/composition-api')
    ? ['error', ['script-setup', 'composition-vue2']]
    : 'off',
  'vue/custom-event-name-casing': ['error', 'kebab-case'],
  'vue/no-unsupported-features': ['error', { version: '^2.6.0' }],
}

const vueModernRules: FlatConfigRules = {
  'vue/component-api-style': 'error',
  'vue/custom-event-name-casing': ['error', 'camelCase'],
}

const vueCommonRules: FlatConfigRules = {
  'vue/attributes-order': [
    'error',
    {
      alphabetical: true,
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    },
  ],
  'vue/block-order': 'error',
  'vue/block-tag-newline': 'error',
  'vue/camelcase': 'error',
  'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
  'vue/component-options-name-casing': 'error',
  'vue/component-tags-order': 'off',
  'vue/define-macros-order': [
    'error',
    {
      defineExposeLast: true,
      order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
    },
  ],
  'vue/define-props-declaration': 'error',
  'vue/dot-notation': 'error',
  'vue/enforce-style-attribute': 'error',
  'vue/eqeqeq': 'error',
  'vue/html-button-has-type': 'error',
  'vue/html-comment-content-spacing': 'error',
  'vue/html-self-closing': [
    'error',
    {
      html: { component: 'always', normal: 'always', void: 'always' },
      math: 'always',
      svg: 'always',
    },
  ],
  'vue/match-component-file-name': [
    'error',
    {
      extensions: ['js', 'cjs', 'mjs', 'jsx', 'cjsx', 'mjsx', 'ts', 'cts', 'mts', 'tsx', 'ctsx', 'mtsx', 'vue'],
    },
  ],
  'vue/match-component-import-name': 'error',
  'vue/new-line-between-multi-line-property': 'error',
  'vue/next-tick-style': 'error',
  'vue/no-boolean-default': 'error',
  'vue/no-child-content': 'error',
  'vue/no-console': 'error',
  'vue/no-constant-condition': 'error',
  'vue/no-duplicate-attr-inheritance': 'error',
  'vue/no-empty-component-block': 'error',
  'vue/no-empty-pattern': 'error',
  'vue/no-lone-template': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-multiple-objects-in-class': 'error',
  'vue/no-potential-component-option-typo': 'error',
  'vue/no-ref-object-reactivity-loss': 'error',
  'vue/no-required-prop-with-default': 'error',
  'vue/no-setup-props-reactivity-loss': 'error',
  'vue/no-static-inline-styles': ['error', { allowBinding: false }],
  'vue/no-this-in-before-route-enter': 'error',
  'vue/no-undef-components': [
    'error',
    {
      ignorePatterns: ['client-only', 'el(\\-\\w+)+', 'router(\\-\\w+)+', 'svg-icon', 'van(\\-\\w+)+'],
    },
  ],
  'vue/no-undef-properties': 'error',
  'vue/no-unused-emit-declarations': 'error',
  'vue/no-unused-properties': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-use-v-else-with-v-for': 'error',
  'vue/no-useless-concat': 'error',
  'vue/no-useless-mustaches': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/no-v-html': 'off',
  'vue/no-v-text': 'error',
  'vue/object-shorthand': 'error',
  'vue/padding-line-between-blocks': 'error',
  'vue/padding-lines-in-component-definition': 'error',
  'vue/prefer-define-options': 'error',
  'vue/prefer-prop-type-boolean-first': 'error',
  'vue/prefer-separate-static-class': 'error',
  'vue/prefer-template': 'error',
  'vue/prefer-true-attribute-shorthand': 'error',
  'vue/require-default-prop': 'error',
  'vue/require-direct-export': 'error',
  'vue/require-emit-validator': 'error',
  'vue/require-explicit-slots': 'error',
  'vue/require-macro-variable-name': 'error',
  'vue/require-name-property': 'error',
  'vue/require-prop-types': 'error',
  'vue/require-v-for-key': 'off',
  'vue/v-for-delimiter-style': 'error',
  'vue/v-on-event-hyphenation': 'error',
  'vue/v-on-handler-style': 'off',
  'vue/valid-define-options': 'error',
}

export function getVueRules() {
  const { options } = getContext()

  const vueAdditionalRules: FlatConfigRules = {
    'vue/block-lang': ['error', { script: { allowNoLang: options.typescript, lang: 'ts' }, style: { lang: 'scss' } }],
  }

  const vueRules: FlatConfigRules = {
    ...vueCommonRules,
    ...vueAdditionalRules,
    ...(isLegacyVue ? vueLegacyRules : vueModernRules),
  }

  return vueRules
}
