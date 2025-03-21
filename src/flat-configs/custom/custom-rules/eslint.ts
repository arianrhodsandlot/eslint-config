import { isProduction } from '../../../lib/utils.js'
import type { FlatConfigRules } from '../../../types/eslint.js'

export const eslintRules: FlatConfigRules = {
  'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
  'array-callback-return': ['error', { allowImplicit: false, checkForEach: false }],
  'arrow-body-style': 'off',
  camelcase: [
    'error',
    {
      allow: ['UNSAFE', 'UNSTABLE'],
      ignoreDestructuring: true,
      ignoreGlobals: true,
      ignoreImports: true,
      properties: 'never',
    },
  ],
  complexity: ['error'],
  curly: 'error',
  'default-case-last': 'error',
  'dot-notation': ['error', { allowKeywords: true }],
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-style': ['error', 'declaration'],
  'max-depth': ['error', 4],
  'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],
  'max-params': 'error',
  'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
  'no-array-constructor': 'error',
  'no-caller': 'error',
  'no-console': [isProduction ? 'warn' : 'error', { allow: ['info', 'table', 'assert', 'warn', 'error', 'trace'] }],
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-debugger': isProduction ? 'error' : 'warn',
  'no-dupe-class-members': 'off',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-eval': 'off',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-semi': 'off',
  'no-implicit-coercion': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-mixed-spaces-and-tabs': 'off',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-new': 'error',
  'no-new-func': 'off',
  'no-new-wrappers': 'error',
  'no-object-constructor': 'error',
  'no-octal-escape': 'error',
  'no-plusplus': 'error',
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-restricted-syntax': ['error', { message: "Don't declare enums", selector: 'TSEnumDeclaration' }],
  'no-return-assign': ['error', 'except-parens'],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable-loop': 'error',
  'no-use-before-define': 'off',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'object-shorthand': 'error',
  'one-var': ['error', { initialized: 'never' }],
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'off',
  'prefer-const': ['error', { destructuring: 'all' }],
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: { array: false, object: false },
      VariableDeclarator: { array: false, object: true },
    },
    { enforceForRenamedProperties: false },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-template': 'error',
  radix: 'error',
  'require-await': 'error',
  'sort-imports': ['error', { ignoreDeclarationSort: true }],
  'symbol-description': 'error',
  'unicode-bom': ['error', 'never'],
  'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
  yoda: ['error', 'never'],
}
