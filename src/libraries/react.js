import eslintPluginJjsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import { jsxFiles, tsxFiles } from '../common.js'

/** @type { import('eslint').Linter.FlatConfig } */
export const configForReact = {
  files: [...jsxFiles, ...tsxFiles],

  plugins: {
    'jsx-a11y': eslintPluginJjsxA11y,
    react: eslintPluginReact,
    'react-hooks': eslintPluginReactHooks,
  },

  rules: {
    ...eslintPluginJjsxA11y.configs.recommended.rules,
    ...eslintPluginReact.configs.recommended.rules,
    ...eslintPluginReactHooks.configs.recommended.rules,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
