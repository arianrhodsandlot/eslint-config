import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getTestConfigs() {
  const { options } = getContext()
  const files = ['test?(s)/**/*.{js,ts}?(x)']
  const rules: FlatConfigRules = {
    'no-empty-pattern': 'off',
  }
  if (options.typescript) {
    Object.assign(rules, {
      '@typescript-eslint/no-non-null-assertion': 'off',
    })
  }
  const testConfigs: FlatConfigs = [{ files, rules }]
  return testConfigs
}
