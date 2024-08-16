import type { FlatConfigRules } from '../../../types/eslint.js'

export const perfectionistRules: FlatConfigRules = {
  'perfectionist/sort-interfaces': [
    'error',
    { ignoreCase: false, order: 'asc', partitionByNewLine: true, type: 'alphabetical' },
  ],
  'perfectionist/sort-object-types': [
    'error',
    { ignoreCase: false, order: 'asc', partitionByNewLine: true, type: 'alphabetical' },
  ],
  'perfectionist/sort-objects': [
    'error',
    { ignoreCase: false, order: 'asc', partitionByNewLine: true, type: 'alphabetical' },
  ],
}
