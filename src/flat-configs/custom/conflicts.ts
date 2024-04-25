import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules } from '../../types/eslint.js'

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
        'perfectionist/sort-vue-attributes': 'off',
        'vue/padding-lines-in-component-definition': ['error', { groupSingleLineProperties: false }],
      })
    }
  }

  if (options.unicorn && options.regexp) {
    Object.assign(rules, {
      'unicorn/better-regex': 'off',
    })
  }

  return [{ rules }]
}
