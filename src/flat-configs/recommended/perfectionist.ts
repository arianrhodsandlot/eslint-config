import perfectionistAlphabetical from 'eslint-plugin-perfectionist/configs/recommended-alphabetical'
import type { FlatConfigs } from '../../types/eslint.js'

export const perfectionistConfigs: FlatConfigs = [{ name: 'perfectionist/recommended', ...perfectionistAlphabetical }]
