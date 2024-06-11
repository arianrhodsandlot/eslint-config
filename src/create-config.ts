import { fixupConfigRules } from '@eslint/compat'
import _ from 'lodash'
import { getCustomFlatConfigs } from './flat-configs/custom/index.js'
import { getRecommendedFlatConfigs } from './flat-configs/recommended/index.js'
import {
  getGitIgnores,
  getPackageField,
  isPackageInstalled,
  isServerProject,
  lookupFiles,
  setContext,
  shouldEnableDiff,
} from './lib/utils.js'
import type { CreateConfigOptions } from './types/config.js'

const { defaultsDeep } = _

const defaultOptions: Required<CreateConfigOptions> = {
  append: [],
  compat: getPackageField('browserslist') || lookupFiles('.browserslistrc'),
  diff: shouldEnableDiff(),
  eslintComments: true,
  esX: true,
  import: true,
  jsdoc: true,
  markdown: true,
  n: isServerProject(),
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
  tailwindcss: isPackageInstalled('tailwindcss'),
  tsdoc: isPackageInstalled('typescript'),
  typescript: isPackageInstalled('typescript'),
  unicorn: true,
  vue: isPackageInstalled('vue'),
  vueI18n: isPackageInstalled('vue-i18n'),
}

export function createConfig(
  initialOptions?: ((defailtOption?: typeof defaultOptions) => CreateConfigOptions) | CreateConfigOptions,
) {
  const resolvedInitialOptions = typeof initialOptions === 'function' ? initialOptions(defaultOptions) : initialOptions
  const options: Required<CreateConfigOptions> = defaultsDeep(resolvedInitialOptions, defaultOptions)
  setContext({ options })
  const recommendedFlatConfig = getRecommendedFlatConfigs()
  const customFlatConfig = getCustomFlatConfigs()
  const prepend = Array.isArray(options.prepend) ? options.prepend : [options.prepend]
  const append = Array.isArray(options.append) ? options.append : [options.append]
  const config = [
    ...recommendedFlatConfig,
    ...customFlatConfig,
    { ignores: ['node_modules/**/*', 'dist/**/*', '**/vendor?(s)/**/*', ...getGitIgnores()] },
  ]
  if (prepend) {
    config.unshift(...prepend)
  }
  if (Object.keys(options.rules).length > 0) {
    config.push({ rules: options.rules })
  }
  if (append) {
    config.push(...append)
  }
  return fixupConfigRules(config)
}
