import type { Linter } from 'eslint'

export const typescriptRules: Linter.RulesRecord = {
  '@typescript-eslint/array-type': ['error', { default: 'array' }],
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/member-ordering': ['error'],
  '@typescript-eslint/no-empty-function': [
    'error',
    { allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions', 'overrideMethods'] },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-shadow': 'off',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/class-methods-use-this': [
    'error',
    {
      ignoreOverrideMethods: true,
      ignoreClassesThatImplementAnInterface: true,
    },
  ],
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/prefer-includes': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
  '@typescript-eslint/no-unused-vars': [
    'error',
    { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true, vars: 'all' },
  ],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
  ],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 3,
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'inline-type-imports' },
  ],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
  '@typescript-eslint/ban-types': [
    'error',
    {
      extendDefaults: false,
      types: {
        String: {
          message: 'Use string instead',
          fixWith: 'string',
        },
        Boolean: {
          message: 'Use boolean instead',
          fixWith: 'boolean',
        },
        Number: {
          message: 'Use number instead',
          fixWith: 'number',
        },
        Symbol: {
          message: 'Use symbol instead',
          fixWith: 'symbol',
        },
        BigInt: {
          message: 'Use bigint instead',
          fixWith: 'bigint',
        },
        Function: {
          message: [
            'The `Function` type accepts any function-like value.',
            'It provides no type safety when calling the function, which can be a common source of bugs.',
            'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
            'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
          ].join('\n'),
        },
        // object typing
        Object: {
          message: [
            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
          ].join('\n'),
        },
        '{}': {
          message: [
            '`{}` actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
          ].join('\n'),
        },
      },
    },
  ],
}
