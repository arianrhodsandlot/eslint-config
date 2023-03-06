import { eslintRules } from './eslint.js'
import { etcRules } from './etc.js'
import { importRules } from './import.js'
import { prettierRules } from './prettier.js'
import { promiseRules } from './promise.js'
import { sonarjsRules } from './sonarjs.js'
import { typescriptRules } from './typescript.js'
import { unicornRules } from './unicorn.js'

/** @type { import('eslint').Linter.RulesRecord } */
export const overrides = {
  ...eslintRules,
  ...etcRules,
  ...importRules,
  ...prettierRules,
  ...promiseRules,
  ...sonarjsRules,
  ...typescriptRules,
  ...unicornRules,
}

export const overridesWithTypeChecking = {
  ...overrides,

  // temporarily disabled since eslint-etc-plugin does not support flat config fully
  // see https://github.com/import-js/eslint-plugin-import/pull/2714
  'etc/no-commented-out-code': 'off',
  'etc/no-misused-generics': 'error',
  'etc/throw-error': 'error',
}
