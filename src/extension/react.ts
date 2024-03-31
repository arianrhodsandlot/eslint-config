import type { Linter } from 'eslint'
// @ts-expect-error
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
// @ts-expect-error
import eslintPluginReact from 'eslint-plugin-react'
// @ts-expect-error
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import { jsFiles, tsFiles } from '../lib/common.js'
import { reactRules } from '../overrides/react.js'

export const configForReact: Linter.FlatConfig = {
  files: [...jsFiles, ...tsFiles],

  plugins: {
    'jsx-a11y': eslintPluginJsxA11y,
    react: eslintPluginReact,
    'react-hooks': eslintPluginReactHooks,
  },

  rules: {
    ...eslintPluginJsxA11y.configs.recommended.rules,
    ...eslintPluginReact.configs.recommended.rules,
    ...eslintPluginReact.configs['jsx-runtime'].rules,
    ...eslintPluginReactHooks.configs.recommended.rules,
    ...reactRules,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
