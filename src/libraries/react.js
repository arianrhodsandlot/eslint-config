import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import { jsxFiles, tsxFiles } from '../lib/common.js'
import { reactRules } from '../overrides/react.js'

/** @type { import('eslint').Linter.FlatConfig } */
export const configForReact = {
  files: [...jsxFiles, ...tsxFiles],

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
