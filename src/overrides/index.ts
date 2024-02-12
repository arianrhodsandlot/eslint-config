import type { Linter } from 'eslint'
import { eslintRules } from './eslint.js'
import { importRules } from './import.js'
import { prettierRules } from './prettier.js'
import { promiseRules } from './promise.js'
import { sonarjsRules } from './sonarjs.js'
import { typescriptRules } from './typescript.js'
import { unicornRules } from './unicorn.js'

export const overrides: Linter.RulesRecord = {
  ...eslintRules,
  ...importRules,
  ...prettierRules,
  ...promiseRules,
  ...sonarjsRules,
  ...typescriptRules,
  ...unicornRules,
}

export const overridesWithTypeChecking: Linter.RulesRecord = {
  ...overrides,
}
