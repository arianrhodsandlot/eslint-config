import type { FlatConfigRules } from '../../../types/eslint.js'

export const vueI18nRules: FlatConfigRules = {
  '@intlify/vue-i18n/no-deprecated-i18n-component': 'error',
  '@intlify/vue-i18n/no-deprecated-i18n-place-attr': 'error',
  '@intlify/vue-i18n/no-deprecated-i18n-places-prop': 'error',
  '@intlify/vue-i18n/no-deprecated-modulo-syntax': 'error',
  '@intlify/vue-i18n/no-deprecated-tc': 'error',
  '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
  '@intlify/vue-i18n/no-dynamic-keys': 'error',
  '@intlify/vue-i18n/no-html-messages': 'error',
  '@intlify/vue-i18n/no-i18n-t-path-prop': 'error',
  '@intlify/vue-i18n/no-missing-keys': 'off',
  '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
  '@intlify/vue-i18n/no-raw-text': [
    'error',
    {
      attributes: {
        '/.+/': [
          'aria-label',
          'aria-placeholder',
          'aria-roledescription',
          'aria-valuetext',
          'content',
          'label',
          'title',
        ],
        img: ['alt'],
        input: ['placeholder'],
      },
      ignoreNodes: ['el-icon', 'md-icon', 'svg-icon', 'v-icon'],
      ignorePattern: '^[-#:()&]+$',
      ignoreText: [''],
    },
  ],
  '@intlify/vue-i18n/no-unknown-locale': 'error',
  '@intlify/vue-i18n/no-unused-keys': 'error',
  '@intlify/vue-i18n/no-v-html': 'error',
  '@intlify/vue-i18n/prefer-linked-key-with-paren': 'error',
  '@intlify/vue-i18n/prefer-sfc-lang-attr': 'error',
  '@intlify/vue-i18n/sfc-locale-attr': 'error',
  '@intlify/vue-i18n/valid-message-syntax': 'error',
}
