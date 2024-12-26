import {
  eslintPluginJsxA11y,
  eslintPluginReact,
  eslintPluginReactHooks,
  eslintPluginReactRefresh,
} from '../../lib/eslint-plugins.js'
import { isPackageInstalled } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const reactConfigs: FlatConfigs = [
  {
    name: 'jsx-a11y/recommended',
    plugins: { 'jsx-a11y': eslintPluginJsxA11y },
    rules: eslintPluginJsxA11y.configs.recommended.rules,
  },
  {
    name: 'react/recommended',
    ...eslintPluginReact.configs.recommended,
  },
  {
    name: 'react-hooks/recommended',
    plugins: { 'react-hooks': eslintPluginReactHooks },
    rules: eslintPluginReactHooks.configs.recommended.rules,
  },
  {
    name: 'react-refresh/recommended',
    ...eslintPluginReactRefresh.configs[isPackageInstalled('vite') ? 'vite' : 'recommended'],
  },
]
