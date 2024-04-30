import type { FlatConfigRules } from '../../../types/eslint.js'

export const perfectionistRules: FlatConfigRules = {
  'perfectionist/sort-interfaces': [
    'error',
    { 'ignore-case': false, order: 'asc', 'partition-by-new-line': true, type: 'alphabetical' },
  ],
  'perfectionist/sort-object-types': [
    'error',
    { 'ignore-case': false, order: 'asc', 'partition-by-new-line': true, type: 'alphabetical' },
  ],
  'perfectionist/sort-objects': [
    'error',
    { 'ignore-case': false, order: 'asc', 'partition-by-new-line': true, type: 'alphabetical' },
  ],
}
