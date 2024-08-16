import perfectionist from 'eslint-plugin-perfectionist'
import type { FlatConfigs } from '../../types/eslint.js'

export const perfectionistConfigs: FlatConfigs = [
  // @ts-expect-error types from perfectionist is not compatible with eslint
  { name: 'perfectionist/recommended', ...perfectionist.configs['recommended-alphabetical'] },
]
