import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getConflictConfigs() {
  const { options } = getContext()
  const rules: FlatConfigRules = {}

  if (options.perfectionist) {
    Object.assign(rules, {
      'sort-imports': 'off',
    })

    if (options.import) {
      Object.assign(rules, {
        'perfectionist/sort-imports': 'off',
      })
    }

    if (options.vue) {
      Object.assign(rules, {
        'vue/padding-lines-in-component-definition': ['error', { groupSingleLineProperties: false }],
      })
    }

    if (options.typescript) {
      Object.assign(rules, {
        '@typescript-eslint/member-ordering': 'off',
      })
    }
  }

  if (options.unicorn && options.regexp) {
    Object.assign(rules, {
      'unicorn/better-regex': 'off',
    })
  }

  const conflictConfigs: FlatConfigs = [{ name: 'conflicts', rules }]
  return conflictConfigs
}
