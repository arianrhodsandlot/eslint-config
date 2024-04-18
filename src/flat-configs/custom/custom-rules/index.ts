import { getContext } from '../../../lib/utils.js'
import type { FlatConfigRules } from '../../../types/eslint.js'
import { eslintRules } from './eslint.js'
import { importRules } from './import.js'
import { nRules } from './n.js'
import { nonCompatibleRules } from './non-compatible.js'
import { promiseRules } from './promise.js'
import { reactRules } from './react.js'
import { securityRules } from './security.js'
import { sonarjsRules } from './sonarjs.js'
import { typescriptRules } from './typescript.js'
import { unicornRules } from './unicorn.js'
import { vueRules } from './vue.js'

export function getCustomRulesConfigs() {
  const customRules: FlatConfigRules = { ...eslintRules }

  const { options } = getContext()

  if (options.import) {
    Object.assign(customRules, importRules)
  }
  if (options.n) {
    Object.assign(customRules, nRules)
  }
  if (options.promise) {
    Object.assign(customRules, promiseRules)
  }
  if (options.react) {
    Object.assign(customRules, reactRules)
  }
  if (options.security) {
    Object.assign(customRules, securityRules)
  }
  if (options.sonarjs) {
    Object.assign(customRules, sonarjsRules)
  }
  if (options.typescript) {
    Object.assign(customRules, typescriptRules)
  }
  if (options.unicorn) {
    Object.assign(customRules, unicornRules)
  }
  if (options.vue) {
    Object.assign(customRules, vueRules)
  }

  Object.assign(customRules, nonCompatibleRules)

  return [{ rules: customRules }]
}
