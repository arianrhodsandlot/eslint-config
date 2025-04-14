import eslintPluginReact from '@eslint-react/eslint-plugin'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import { isPackageInstalled } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const reactConfigs: FlatConfigs = [
  {
    name: 'jsx-a11y/recommended',
    plugins: { 'jsx-a11y': eslintPluginJsxA11y },
    rules: eslintPluginJsxA11y.configs.recommended.rules,
  },
  // @ts-expect-error unknown reason
  eslintPluginReact.configs.recommended,
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
