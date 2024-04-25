import type { FlatConfigRules } from '../../../types/eslint.js'

export const perfectionistRules: FlatConfigRules = {
  'perfectionist/sort-interfaces': ['error', { 'partition-by-new-line': true }],
  'perfectionist/sort-object-types': ['error', { 'partition-by-new-line': true }],
  'perfectionist/sort-objects': ['error', { 'partition-by-new-line': true }],
}
