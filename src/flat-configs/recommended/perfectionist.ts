import perfectionist from 'eslint-plugin-perfectionist'
import type { FlatConfigs } from '../../types/eslint.js'

// @ts-expect-error
export const perfectionistConfigs: FlatConfigs = [{ name: 'perfectionist/recommended', ...perfectionist.configs['recommended-alphabetical'] }]
