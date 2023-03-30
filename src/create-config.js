import { getTsconfig } from 'get-tsconfig'
import _ from 'lodash'
import {
  configForJs,
  configForJsInMarkdown,
  configForMarkdown,
  configForTsWithTypeChecking,
  configForTsWithoutTypeChecking,
} from './core/configs.js'

function createBaseConfig(options) {
  const configForJs_ = _.isFunction(options.overrides?.js)
    ? options.overrides?.js(configForJs)
    : { ...configForJs, ...options.overrides?.js }

  let enableTypeChecking = Boolean(getTsconfig()?.path)
  if (options && 'typeChecking' in options && !options.typeChecking) {
    enableTypeChecking = false
  }
  let configForTs = enableTypeChecking ? configForTsWithTypeChecking : configForTsWithoutTypeChecking
  if (enableTypeChecking && options.typeChecking?.parserOptions && configForTs.languageOptions) {
    configForTs.languageOptions.parserOptions = {
      ...configForTs?.languageOptions?.parserOptions,
      ...options.typeChecking?.parserOptions,
    }
  }
  configForTs = _.isFunction(options.overrides?.ts)
    ? options.overrides?.ts(configForTs)
    : { ...configForTs, ...options.overrides?.ts }

  return [configForJs_, configForTs, configForMarkdown, configForJsInMarkdown]
}

async function isPackageAvailable(packageName) {
  try {
    await import(packageName)
    return true
  } catch {
    return false
  }
}

/**
 * @param {object} [options]
 * @param {object} [options.overrides]
 * @param {object | function} [options.overrides.js] overrides rules for js files
 * @param {object | function} [options.overrides.ts] overrides rules for ts files
 * @param {boolean} [options.typeChecking] Should type checking rules be enabled
 * @param {import('eslint').Linter.FlatConfig | import('eslint').Linter.FlatConfig[]} [options.append] append custom flat configs to default
 * @param {object} [options.libraries] Libraries related config
 * @param {boolean} [options.libraries.react] Should react related plugins and rules be enabled
 * @return {Promise<object>}
 */
export async function createConfig(options) {
  options = _.defaultsDeep(options, {
    overrides: undefined,
    typeChecking: Boolean(getTsconfig()?.path),
    append: [],
    libraries: {
      react: false,
    },
  })

  const config = createBaseConfig(options)

  if (options?.libraries?.react || (await isPackageAvailable('react'))) {
    const { configForReact } = await import('./libraries/react.js')
    config.push(configForReact)
  }

  if (options?.append) {
    config.push(..._.castArray(options?.append))
  }

  return config
}
