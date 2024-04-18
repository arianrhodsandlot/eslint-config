import { Linter } from 'eslint'
import type { FlatConfigRules } from '../../../types/eslint.js'

const eslintMajorVersion = Number.parseInt(Linter.version, 10)

export const nonCompatibleRules: FlatConfigRules =
  eslintMajorVersion > 8
    ? {
        'import/newline-after-import': 'off',
        'promise/no-callback-in-promise': 'off',
        'promise/no-nesting': 'off',
        'promise/no-promise-in-callback': 'off',
        'promise/no-return-wrap': 'off',
        'promise/prefer-await-to-then': 'off',
        'security/detect-child-process': 'off',
        'sonarjs/no-empty-collection': 'off',
        'sonarjs/no-extra-arguments': 'off',
        'sonarjs/no-gratuitous-expressions': 'off',
        'sonarjs/no-one-iteration-loop': 'off',
        'sonarjs/no-redundant-jump': 'off',
        'sonarjs/no-unused-collection': 'off',
        'sonarjs/no-use-of-empty-return-value': 'off',
        'vuejs-accessibility/alt-text': 'off',
        'vuejs-accessibility/anchor-has-content': 'off',
        'vuejs-accessibility/aria-props': 'off',
        'vuejs-accessibility/aria-role': 'off',
        'vuejs-accessibility/aria-unsupported-elements': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/heading-has-content': 'off',
        'vuejs-accessibility/iframe-has-title': 'off',
        'vuejs-accessibility/interactive-supports-focus': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/media-has-caption': 'off',
        'vuejs-accessibility/mouse-events-have-key-events': 'off',
        'vuejs-accessibility/no-access-key': 'off',
        'vuejs-accessibility/no-autofocus': 'off',
        'vuejs-accessibility/no-distracting-elements': 'off',
        'vuejs-accessibility/no-redundant-roles': 'off',
        'vuejs-accessibility/no-static-element-interactions': 'off',
        'vuejs-accessibility/role-has-required-aria-props': 'off',
        'vuejs-accessibility/tabindex-no-positive': 'off',
      }
    : {}