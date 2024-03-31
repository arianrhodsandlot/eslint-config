import type { Linter } from 'eslint'
import _ from 'lodash'
import tseslint from 'typescript-eslint'
import { configForJsAndTs, configForTests, configForTsWithTypeChecking, globalConfig } from './core/configs.js'
import { configsForMarkdown } from './extension/markdown.js'
import { configForNext } from './extension/next.js'
import { configForPrettier } from './extension/prettier.js'
import { configForReact } from './extension/react.js'
import { isPackageAvailable } from './lib/utils.js'

function createBaseConfig(options: CreateConfigOptions) {
  const baseConfig = tseslint.config(...globalConfig, ...configForJsAndTs)

  const enableTypeChecking = Boolean(options?.typeChecking)
  if (enableTypeChecking) {
    let [configForTs] = configForTsWithTypeChecking

    // @ts-expect-error
    if (options.typeChecking?.parserOptions && configForTs.languageOptions) {
      configForTs.languageOptions.parserOptions = {
        ...configForTs?.languageOptions?.parserOptions,
        // @ts-expect-error
        ...options.typeChecking?.parserOptions,
      }
    }

    baseConfig.push(configForTs)
  }

  baseConfig.push(...configForTests)

  return baseConfig
}

interface ConfigExtension {
  /** Should React related plugins and rules be enabled */
  react?: boolean
  /** Should Next related plugins and rules be enabled */
  next?: boolean
  prettier?: boolean
  markdown?: boolean
}

interface CreateConfigOptions {
  /**
   * Should type checking rules be enabled, defaults to true if there is a tsconfig.json file
   * */
  typeChecking?: boolean | { parserOptions: any }

  /** Extended config */
  extension?: ConfigExtension

  /** append custom flat configs to default */
  append?: Linter.FlatConfig | Linter.FlatConfig[]
}

function addExtensionsToConfig(config: ReturnType<typeof createBaseConfig>, extension?: ConfigExtension) {
  if (!extension) {
    return
  }

  if (extension.react) {
    config.push(configForReact)
  }
  if (extension.next) {
    config.push(configForNext)
  }
  if (extension.markdown) {
    config.push(...configsForMarkdown)
  }
  if (extension.prettier) {
    config.push(configForPrettier)
  }
}

export async function createConfig(createConfigOptions?: CreateConfigOptions) {
  const options: CreateConfigOptions = _.defaultsDeep(createConfigOptions, {
    typeChecking: false,
    append: [],
    extension: {
      react: await isPackageAvailable('react'),
      next: await isPackageAvailable('next'),
      prettier: await isPackageAvailable('prettier'),
      markdown: true,
    },
  })

  const config = createBaseConfig(options)

  addExtensionsToConfig(config, options?.extension)

  if (options?.append) {
    config.push(..._.castArray(options?.append))
  }

  return config
}
