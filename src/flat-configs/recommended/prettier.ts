import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { getContext, lookupFiles } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const defaultPrettierConfig = {
  htmlWhitespaceSensitivity: 'ignore',
  jsSingleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
}

const prettierConfigFileNames = ['.prettierrc.js', '.prettierrc.json', '.prettierrc.json5']
function readPrettierConfig() {
  const content = lookupFiles(...prettierConfigFileNames)
  if (content) {
    const result = content.match(/\{[\s\S]*?\}/)
    if (result) {
      const [configString] = result
      if (configString) {
        try {
          let result
          eval(`result = ${configString}`)
          return result
        } catch {}
      }
    }
  }
  return defaultPrettierConfig
}

export function getPrettierConfigs() {
  const { options } = getContext()
  if (!options.prettier) {
    return []
  }

  const prettierConfig = typeof options.prettier === 'object' ? options.prettier : readPrettierConfig()
  const prettierConfigs: FlatConfigs = [
    { name: 'prettier/recommended', ...eslintPluginPrettierRecommended },
    { name: 'prettier/recommended', rules: { 'prettier/prettier': ['error', prettierConfig] } },
  ]
  return prettierConfigs
}
