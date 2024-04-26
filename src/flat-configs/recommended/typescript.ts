import tseslint from 'typescript-eslint'
import type { FlatConfigs } from '../../types/eslint.js'

export const typescriptConfigs = [
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
] as unknown as FlatConfigs
