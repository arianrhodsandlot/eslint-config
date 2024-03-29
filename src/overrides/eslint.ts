import type { Linter } from 'eslint'
import { isProduction } from '../lib/common.js'

export const eslintRules: Linter.RulesRecord = {
  'array-bracket-newline': ['error', 'consistent'],
  complexity: ['error'],
  curly: 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  'func-style': ['error', 'declaration'],
  'lines-between-class-members': 'off',
  'max-depth': ['error', 4],
  'max-lines': ['error', { max: 1000, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
  'max-params': 'error',
  'no-console': [isProduction ? 'error' : 'warn', { allow: ['info', 'table', 'assert', 'warn', 'error', 'trace'] }],
  'no-debugger': isProduction ? 'error' : 'warn',
  'no-dupe-class-members': 'off',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  'no-negated-condition': 'error',
  'no-restricted-syntax': ['error', { selector: 'TSEnumDeclaration', message: "Don't declare enums" }],
  'no-undef': 'off',
  'no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true, enforceForJSX: true },
  ],
  'no-use-before-define': 'off',
  'no-var': 'error',
  'object-shorthand': 'error',
  'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
  'prefer-destructuring': [
    'error',
    { AssignmentExpression: { array: false, object: false }, VariableDeclarator: { array: false, object: true } },
    { enforceForRenamedProperties: false },
  ],
  'prefer-object-spread': 'error',
  'prefer-rest-params': 'error',
  'prefer-template': 'error',
  quotes: ['error', 'single', { avoidEscape: true }],
  radix: 'error',
  'require-await': 'error',
  'sort-imports': ['error', { ignoreDeclarationSort: true }],
  // 'sort-keys': 'error',
}
