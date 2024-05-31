import type { Linter } from 'eslint'

export const typescriptRules: Linter.RulesRecord = {
  '@typescript-eslint/ban-types': [
    'error',
    {
      extendDefaults: true,
      types: {
        '{}': {
          message: [
            '`{}` actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.',
            '- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
          ].join('\n'),
          suggest: ['Record<string, unknown>', 'unknown', 'Record<string, never>', 'NonNullable<unknown>'],
        },
        Object: {
          message: [
            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
          ].join('\n'),
          suggest: ['Record<string, unknown>', 'unknown', 'NonNullable<unknown>'],
        },
      },
    },
  ],
  '@typescript-eslint/class-methods-use-this': [
    'error',
    { ignoreClassesThatImplementAnInterface: true, ignoreOverrideMethods: true },
  ],
  '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports', prefer: 'type-imports' }],
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/member-ordering': ['error'],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      selector: 'default',
      trailingUnderscore: 'allow',
    },
    { format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow', selector: 'import' },
    { format: ['camelCase', 'PascalCase', 'UPPER_CASE'], selector: 'variable' },
    { format: ['camelCase', 'PascalCase'], selector: 'function' },
    { format: ['PascalCase'], selector: 'typeLike' },
    { format: ['camelCase', 'PascalCase', 'UPPER_CASE'], modifiers: ['static'], selector: 'classProperty' },
    { format: null, selector: ['objectLiteralProperty', 'typeProperty'] },
  ],
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-empty-function': [
    'error',
    { allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions', 'overrideMethods'] },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    { args: 'none', caughtErrors: 'none', destructuredArrayIgnorePattern: '^_', ignoreRestSiblings: true, vars: 'all' },
  ],
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  'no-useless-constructor': 'off',
}
