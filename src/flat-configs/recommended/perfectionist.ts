import perfectionist from 'eslint-plugin-perfectionist'
import type { FlatConfigs } from '../../types/eslint.js'

export const perfectionistConfigs: FlatConfigs = [
  // @ts-expect-error perfectionist's configs type is not compatible with FlatConfigs
  { name: 'perfectionist/recommended', ...perfectionist.configs['recommended-alphabetical'] },
]
