import eslintPluginReact from '@eslint-react/eslint-plugin'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import { tsGlob } from '../../lib/constants.js'
import { getContext, isPackageInstalled, lookupFiles } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getReactConfigs(): FlatConfigs {
  const configs: FlatConfigs = [
    eslintPluginJsxA11y.flatConfigs.recommended,
    eslintPluginReact.configs.recommended,
    eslintPluginReactHooks.configs.flat.recommended,
  ]

  const { options } = getContext()
  if (options.next) {
    configs.push(eslintPluginReactRefresh.configs.next)
  } else if (isPackageInstalled('vite')) {
    configs.push(eslintPluginReactRefresh.configs.vite)
  } else {
    configs.push(eslintPluginReactRefresh.configs.recommended)
  }

  let { typeaware } = options
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
