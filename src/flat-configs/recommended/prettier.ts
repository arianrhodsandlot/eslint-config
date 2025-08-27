import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import type { Config } from 'prettier'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const defaultPrettierConfig: Config = {
  htmlWhitespaceSensitivity: 'ignore',
  jsSingleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
}

export function getPrettierConfigs() {
  const { options } = getContext()
  if (!options.prettier) {
    return []
  }

  const prettierConfig = typeof options.prettier === 'object' ? options.prettier : defaultPrettierConfig
  const prettierConfigs: FlatConfigs = [
    { name: 'prettier/recommended', ...eslintPluginPrettierRecommended },
    { name: 'prettier/recommended', rules: { 'prettier/prettier': ['error', prettierConfig] } },
  ]
  return prettierConfigs
}
