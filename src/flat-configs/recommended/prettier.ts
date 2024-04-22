import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { Config } from 'prettier'
import { getContext, getPackageVersion, lookupFiles } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const plugins = []
if (getPackageVersion('prettier-plugin-tailwindcss')) {
  plugins.push('prettier-plugin-tailwindcss')
}

const defaultPrettierConfig: Config = {
  htmlWhitespaceSensitivity: 'ignore',
  jsSingleQuote: true,
  plugins,
  printWidth: 120,
  semi: false,
  singleQuote: true,
}

const prettierConfigFileNames = ['.prettierrc.js', '.prettierrc.json', '.prettierrc.json5']
function readPrettierConfig() {
  const content = lookupFiles(...prettierConfigFileNames)
  if (content) {
    const result = content.match(/{([\S\s]*?)}/)
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
    eslintPluginPrettierRecommended,
    { rules: { 'prettier/prettier': ['error', prettierConfig] } },
  ]
  return prettierConfigs
}
