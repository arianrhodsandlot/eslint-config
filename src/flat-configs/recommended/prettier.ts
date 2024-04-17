import { readFileSync } from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { getContext, getPackageVersion } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const plugins = []
if (getPackageVersion('prettier-plugin-tailwindcss')) {
  plugins.push('prettier-plugin-tailwindcss')
}

const defaultPrettierConfig = {
  jsSingleQuote: true,
  plugins,
  printWidth: 120,
  semi: false,
  singleQuote: true,
}

function isRootDirectory(directory: string) {
  return directory === path.resolve(directory, '..')
}

function lookupFile(filename: string) {
  let directory = cwd()
  while (true) {
    const filepath = path.join(directory, filename)
    try {
      return readFileSync(filepath, 'utf8')
    } catch {}

    directory = path.resolve(directory, '..')
    if (isRootDirectory(directory)) {
      return
    }
  }
}

function readPrettierConfig() {
  const content = lookupFile('.prettierrc.js')
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
