import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getMarkdownConfigs() {
  const { options } = getContext()

  const rules: FlatConfigRules = {
    'no-console': 'off',
    'no-undef': 'off',
  }

  if (options.typescript) {
    Object.assign(rules, {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    })
  }
  if (options.import) {
    Object.assign(rules, {
      'import/no-unresolved': 'off',
    })
  }
  if (options.n) {
    Object.assign(rules, {
      'n/no-missing-import': 'off',
    })
  }
  if (options.react) {
    Object.assign(rules, {
      '@eslint-react/naming-convention/filename': 'off',
    })
  }

  const markdownConfigs: FlatConfigs = []
  return markdownConfigs
}
