import type { FlatConfigRules } from '../../../types/eslint.js'

export const sonarjsRules: FlatConfigRules = {
  'sonarjs/code-eval': 'off',
  'sonarjs/cognitive-complexity': 'error',
  'sonarjs/no-duplicate-string': ['error', { threshold: 20 }],
  'sonarjs/no-hardcoded-passwords': 'off',
  'sonarjs/no-os-command-from-path': 'off',
  'sonarjs/os-command': 'off',
  'sonarjs/slow-regex': 'off',
  'sonarjs/todo-tag': 'warn',
}
