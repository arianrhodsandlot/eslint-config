import _ from 'lodash'
import {
  configForJs,
  configForJsInMarkdown,
  configForMarkdown,
  configForTests,
  configForTsWithTypeChecking,
  configForTsWithoutTypeChecking,
  configGlobalIgnore,
} from './core/configs.js'
import { mergeWithConcat } from './lib/utils.js'

function createBaseConfig(options) {
  const configForJs_ = _.isFunction(options.overrides?.js)
    ? options.overrides?.js(configForJs)
    : mergeWithConcat(configForJs, options.overrides?.js)

  const enableTypeChecking = Boolean(options?.typeChecking)
  let configForTs = enableTypeChecking ? configForTsWithTypeChecking : configForTsWithoutTypeChecking
  if (enableTypeChecking && options.typeChecking?.parserOptions && configForTs.languageOptions) {
    configForTs.languageOptions.parserOptions = {
      ...configForTs?.languageOptions?.parserOptions,
      ...options.typeChecking?.parserOptions,
    }
  }
  configForTs = _.isFunction(options.overrides?.ts)
    ? options.overrides?.ts(configForTs)
    : mergeWithConcat(configForTs, options.overrides?.ts)

  return [configGlobalIgnore, configForJs_, configForTs, configForTests, configForMarkdown, configForJsInMarkdown]
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
 * @param {boolean} [options.useGitignore] Should ignore gitignore files
 * @param {import('eslint').Linter.FlatConfig | import('eslint').Linter.FlatConfig[]} [options.append] append custom flat configs to default
 * @param {object} [options.libraries] Libraries related config
 * @param {boolean} [options.libraries.react] Should React related plugins and rules be enabled
 * @param {boolean} [options.libraries.next] Should Next.js related plugins and rules be enabled
 * @return {Promise<object>}
 */
export async function createConfig(options) {
  options = _.defaultsDeep(options, {
    overrides: undefined,
    typeChecking: false,
    append: [],
    useGitignore: true,
    libraries: {
      react: false,
    },
  })

  const config = createBaseConfig(options)

  if (options?.libraries?.react || (await isPackageAvailable('react'))) {
    const { configForReact } = await import('./libraries/react.js')
    config.push(configForReact)
  }

  if (options?.libraries?.next || (await isPackageAvailable('next'))) {
    const { configForNext } = await import('./libraries/next.js')
    config.push(configForNext)
  }

  if (options?.append) {
    config.push(..._.castArray(options?.append))
  }

  return config
}
