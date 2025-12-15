import eslintPluginReact from '@eslint-react/eslint-plugin'
import type { ESLint } from 'eslint'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import { tsGlob } from '../../lib/constants.js'
import { getContext, isPackageInstalled, lookupFiles } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getReactConfigs(): FlatConfigs {
  const configs = [
    {
      name: 'jsx-a11y/recommended',
      plugins: { 'jsx-a11y': eslintPluginJsxA11y },
      rules: eslintPluginJsxA11y.configs.recommended.rules,
    },
    eslintPluginReact.configs.recommended,
    {
      name: 'react-hooks/recommended',
      plugins: { 'react-hooks': eslintPluginReactHooks as unknown as ESLint.Plugin },
      rules: eslintPluginReactHooks.configs.recommended.rules,
    },
    {
      name: 'react-refresh/recommended',
      ...eslintPluginReactRefresh.configs[isPackageInstalled('vite') ? 'vite' : 'recommended'],
    },
  ]

  let { typeaware } = getContext().options
  const tsconfigRootDir = lookupFiles('tsconfig.json')?.path
  if (!tsconfigRootDir) {
    typeaware = false
  }
  if (typeaware) {
    configs.push({
      files: [tsGlob],
      ignores: [`**/*.md/${tsGlob}`],
      ...eslintPluginReact.configs['recommended-type-checked'],
    })
  }

  return configs
}
