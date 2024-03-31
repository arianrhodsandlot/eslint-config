import type { Linter } from 'eslint'
import _ from 'lodash'
import tseslint from 'typescript-eslint'
import { configForJsAndTs, configForTests, configForTsWithTypeChecking, globalConfig } from './core/configs.js'
import { configsForMarkdown } from './extension/markdown.js'
import { configForNext } from './extension/next.js'
import { configForPerfectionist } from './extension/perfectionist.js'
import { configForPrettier } from './extension/prettier.js'
import { configForReact } from './extension/react.js'
import { configsForVue } from './extension/vue.js'
import { getPackageVersion } from './lib/utils.js'

function createBaseConfig(options: CreateConfigOptions) {
  const baseConfig = tseslint.config(...globalConfig, ...configForJsAndTs) as Linter.FlatConfig[]

  const enableTypeChecking = Boolean(options?.typeChecking)
  if (enableTypeChecking) {
    const [configForTs] = configForTsWithTypeChecking

    if (typeof options.typeChecking === 'object' && options.typeChecking.parserOptions && configForTs.languageOptions) {
      configForTs.languageOptions.parserOptions = {
        ...configForTs?.languageOptions?.parserOptions,
        ...options.typeChecking?.parserOptions,
      }
    }

    baseConfig.push(configForTs)
  }

  baseConfig.push(...configForTests)

  return baseConfig
}

interface CreateConfigOptions {
  /** append custom flat configs to default */
  append?: Linter.FlatConfig | Linter.FlatConfig[]
  markdown?: boolean

  /** Should Next related plugins and rules be enabled */
  next?: boolean
  perfectionist?: boolean
  /** prepend custom flat configs to default */
  prepend?: Linter.FlatConfig | Linter.FlatConfig[]
  prettier?: boolean
  /** Should React related plugins and rules be enabled */
  react?: boolean
  /**
   * Should type checking rules be enabled, defaults to true if there is a tsconfig.json file
   * */
  typeChecking?: { parserOptions: any } | boolean
  /** Should Vue related plugins and rules be enabled */
  vue?: boolean
}

function extendConfig(config: ReturnType<typeof createBaseConfig>, options?: CreateConfigOptions) {
  if (!options) {
    return
  }

  if (options.react) {
    config.push(configForReact)
  }
  if (options.next) {
    config.push(configForNext)
  }
  if (options.vue) {
    config.push(...configsForVue)
  }
  if (options.markdown) {
    config.push(...configsForMarkdown)
  }
  if (options.prettier) {
    config.push(configForPrettier)
  }
  if (options.perfectionist) {
    config.push(configForPerfectionist)
  }
}

export function createConfig(createConfigOptions?: CreateConfigOptions) {
  const options: CreateConfigOptions = _.defaultsDeep(createConfigOptions, {
    append: [],
    markdown: true,
    next: getPackageVersion('next'),
    perfectionist: true,
    prepend: [],
    prettier: getPackageVersion('prettier'),
    react: getPackageVersion('react'),
    typeChecking: false,
    vue: getPackageVersion('vue'),
  })

  const config = createBaseConfig(options)

  extendConfig(config, options)

  if (options?.prepend) {
    config.unshift(..._.castArray(options?.prepend))
  }
  if (options?.append) {
    config.push(..._.castArray(options?.append))
  }

  return config
}
