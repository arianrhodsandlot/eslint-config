import { eslintRules } from './eslint.js'
import { importRules } from './import.js'
import { prettierRules } from './prettier.js'
import { promiseRules } from './promise.js'
import { sonarjsRules } from './sonarjs.js'
import { typescriptRules } from './typescript.js'
import { unicornRules } from './unicorn.js'

/** @type { import('eslint').Linter.RulesRecord } */
export const overrides = {
  ...eslintRules,
  ...importRules,
  ...prettierRules,
  ...promiseRules,
  ...sonarjsRules,
  ...typescriptRules,
  ...unicornRules,
}

export const overridesWithTypeChecking = {
  ...overrides,
}
