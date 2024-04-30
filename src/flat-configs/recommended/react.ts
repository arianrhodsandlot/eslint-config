import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import { eslintPluginJsxA11y, eslintPluginReactHooks, eslintPluginReactRefresh } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const reactConfigs: FlatConfigs = [
  {
    name: 'jsx-a11y/recommended',
    plugins: { 'jsx-a11y': eslintPluginJsxA11y },
    rules: eslintPluginJsxA11y.configs.recommended.rules,
  },
  { name: 'react/recommended', ...reactRecommended, settings: { react: { version: 'detect' } } },
  { name: 'react-jsx-runtime/recommended', ...reactJsxRuntime },
  {
    name: 'react-hooks/recommended',
    plugins: { 'react-hooks': eslintPluginReactHooks },
    rules: eslintPluginReactHooks.configs.recommended.rules,
  },
  {
    name: 'react-refresh/recommended',
    plugins: { 'react-refresh': eslintPluginReactRefresh },
    rules: {
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true, allowExportNames: ['meta', 'links', 'headers', 'loader', 'action'] },
      ],
    },
  },
]
