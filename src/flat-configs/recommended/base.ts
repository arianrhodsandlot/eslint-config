import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { jsOrTsGlob } from '../../lib/constants.js'
import { getGitIgnores } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const baseConfigs: FlatConfigs = [
  {
    files: [jsOrTsGlob],
    ignores: getGitIgnores(),
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.commonjs,
        ...globals.nodeBuiltin,
      },
      // @ts-expect-error types in tseslint do not match those in eslint
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
