// @ts-expect-error unknown type
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
// @ts-expect-error unknown type
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import { eslintPluginJsxA11y, eslintPluginReactHooks } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const reactConfigs: FlatConfigs = [
  {
    plugins: { 'jsx-a11y': eslintPluginJsxA11y },
    rules: eslintPluginJsxA11y.configs.recommended.rules,
  },
  reactRecommended,
  reactJsxRuntime,
  {
    plugins: { 'react-hooks': eslintPluginReactHooks },
    rules: eslintPluginReactHooks.configs.recommended.rules,
  },
]
