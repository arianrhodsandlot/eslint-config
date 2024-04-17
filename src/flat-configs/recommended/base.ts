import js from '@eslint/js'
import { getGitIgnores } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const baseConfigs: FlatConfigs = [
  { ignores: getGitIgnores(), linterOptions: { reportUnusedDisableDirectives: true } },
  js.configs.recommended,
]
