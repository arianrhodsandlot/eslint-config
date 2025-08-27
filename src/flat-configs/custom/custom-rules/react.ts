import type { FlatConfigRules } from '../../../types/eslint.js'

export const reactRules: FlatConfigRules = {
  '@eslint-react/dom/no-dangerously-set-innerhtml': 'off',
  '@eslint-react/dom/no-unsafe-iframe-sandbox': 'off',
  '@eslint-react/hooks-extra/ensure-use-callback-has-non-empty-deps': 'error',
  '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps': 'error',
  '@eslint-react/naming-convention/component-name': 'error',
  '@eslint-react/naming-convention/filename': ['error', { rule: 'kebab-case' }],
  '@eslint-react/naming-convention/filename-extension': 'error',
  '@eslint-react/no-children-prop': 'error',
  '@eslint-react/no-class-component': 'error',
  '@eslint-react/no-complex-conditional-rendering': 'error',
  '@eslint-react/no-implicit-key': 'error',
  '@eslint-react/no-missing-component-display-name': 'error',
  '@eslint-react/no-useless-fragment': 'error',
  '@eslint-react/prefer-destructuring-assignment': 'error',
  '@eslint-react/prefer-shorthand-boolean': 'error',
  '@eslint-react/prefer-shorthand-fragment': 'error',
  'jsx-a11y/label-has-associated-control': 'off',
  'jsx-a11y/no-autofocus': 'off',
}
