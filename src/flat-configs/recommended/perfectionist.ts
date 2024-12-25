import perfectionist from 'eslint-plugin-perfectionist'
import type { FlatConfigs } from '../../types/eslint.js'

export const perfectionistConfigs: FlatConfigs = [
  { name: 'perfectionist/recommended', ...perfectionist.configs['recommended-alphabetical'] },
]
