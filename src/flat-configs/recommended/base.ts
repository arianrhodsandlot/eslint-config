import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import type { FlatConfigs } from '../../types/eslint.js'

export const baseConfigs: FlatConfigs = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.commonjs,
        ...globals.nodeBuiltin,
      },
      parser: tseslint.parser,
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    name: 'base',
  },
  {
    name: '@eslint/js/recommended',
    ...js.configs.recommended,
  },
]
