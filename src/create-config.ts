import _ from 'lodash'
import { getCustomFlatConfigs } from './flat-configs/custom/index.js'
import { getRecommendedFlatConfigs } from './flat-configs/recommended/index.js'
import { getPackageField, isPackageInstalled, lookupFiles, setContext } from './lib/utils.js'
import type { CreateConfigOptions } from './types/config.js'

const defaultOptions: Required<CreateConfigOptions> = {
  append: [],
  compat: getPackageField('browserslist') || lookupFiles('.browserslistrc'),
  diff: false,
  eslintComments: true,
  import: true,
  jsdoc: true,
  markdown: true,
  n: true,
  next: isPackageInstalled('next'),
  perfectionist: true,
  prepend: [],
  prettier: isPackageInstalled('prettier'),
  promise: true,
  react: isPackageInstalled('react'),
  regexp: true,
  rules: {},
  security: true,
  sonarjs: true,
  tsdoc: isPackageInstalled('typescript'),
  typescript: isPackageInstalled('typescript'),
  unicorn: true,
  vue: isPackageInstalled('vue'),
}

export function createConfig(initialOptions?: CreateConfigOptions) {
  const options: Required<CreateConfigOptions> = _.defaultsDeep(initialOptions, defaultOptions)
  setContext({ options })
  const recommendedFlatConfig = getRecommendedFlatConfigs()
  const customFlatConfig = getCustomFlatConfigs()
  const prepend = Array.isArray(options.prepend) ? options.prepend : [options.prepend]
  const append = Array.isArray(options.append) ? options.append : [options.append]
  return [...prepend, ...recommendedFlatConfig, ...customFlatConfig, { rules: options.rules }, ...append]
}
