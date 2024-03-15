import type { Linter } from 'eslint'
import _ from 'lodash'
import {
  configForJs,
  configForTests,
  configForTsWithTypeChecking,
  configForTsWithoutTypeChecking,
  configGlobalIgnore,
  configsForMarkdown,
} from './core/configs.js'
import { mergeWithConcat } from './lib/utils.js'

function createBaseConfig(options: CreateConfigOptions) {
  const configForJs_: Linter.FlatConfig = _.isFunction(options.overrides?.js)
    ? options.overrides?.js(configForJs)
    : mergeWithConcat(configForJs, options.overrides?.js)

  const enableTypeChecking = Boolean(options?.typeChecking)
  let configForTs: Linter.FlatConfig = enableTypeChecking ? configForTsWithTypeChecking : configForTsWithoutTypeChecking
  // @ts-expect-error
  if (enableTypeChecking && options.typeChecking?.parserOptions && configForTs.languageOptions) {
    configForTs.languageOptions.parserOptions = {
      ...configForTs?.languageOptions?.parserOptions,
      // @ts-expect-error
      ...options.typeChecking?.parserOptions,
    }
  }
  configForTs = _.isFunction(options.overrides?.ts)
    ? options.overrides?.ts(configForTs)
    : mergeWithConcat(configForTs, options.overrides?.ts)

  return [configGlobalIgnore, configForJs_, configForTs, configForTests, ...configsForMarkdown]
}

async function isPackageAvailable(packageName: string) {
  try {
    await import(packageName)
    return true
  } catch {
    return false
  }
}

interface CreateConfigOptions {
  overrides?: {
    /** overrides rules for js files */
    js?: Linter.FlatConfig | ((...args: unknown[]) => Linter.FlatConfig)
    /** overrides rules for ts files */
    ts?: Linter.FlatConfig | ((...args: unknown[]) => Linter.FlatConfig)
  }
  /**
   * Should type checking rules be enabled, defaults to true if there is a tsconfig.json file
   * */
  typeChecking: boolean | { parserOptions: any }
  /**
   * Should ignore gitignore files
   * @default true
   * */
  useGitignore: boolean
  /** Libraries related config */
  libraries?: {
    /** Should React related plugins and rules be enabled */
    react?: boolean
    /** Should Next related plugins and rules be enabled */
    next?: boolean
  }
  /** append custom flat configs to default */
  append: Linter.FlatConfig | Linter.FlatConfig[]
}

export async function createConfig(createConfigOptions?: CreateConfigOptions) {
  const options: CreateConfigOptions = _.defaultsDeep(createConfigOptions, {
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
