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
      })
    }
  }

  if (options.unicorn && options.regexp) {
    Object.assign(rules, {
      'regexp/match-any': 'off',
      'regexp/strict': 'off',
    })
  }

  return [{ rules }]
}