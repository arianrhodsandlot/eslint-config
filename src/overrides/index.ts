import type { Linter } from 'eslint'
import { eslintRules } from './eslint.js'
import { importRules } from './import.js'
import { nRules } from './n.js'
import { promiseRules } from './promise.js'
import { sonarjsRules } from './sonarjs.js'
import { typescriptRules } from './typescript.js'
import { unicornRules } from './unicorn.js'

export const overrides: Linter.RulesRecord = {
  ...eslintRules,
  ...importRules,
  ...promiseRules,
  ...sonarjsRules,
  ...typescriptRules,
  ...unicornRules,
  ...nRules,
}

export const overridesWithTypeChecking: Linter.RulesRecord = {
  ...overrides,
}
