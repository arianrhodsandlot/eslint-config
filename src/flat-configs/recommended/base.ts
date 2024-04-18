import js from '@eslint/js'
import { jsOrTsGlob } from '../../lib/constants.js'
import { getGitIgnores } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const baseConfigs: FlatConfigs = [
  {
    files: [jsOrTsGlob],
    ignores: getGitIgnores(),
    linterOptions: { reportUnusedDisableDirectives: true },
  },
  js.configs.recommended,
]
