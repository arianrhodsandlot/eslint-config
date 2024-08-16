import { jsOrTsExtensionGlob } from '../../lib/constants.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getTestConfigs() {
  const { options } = getContext()

  const files = [
    `test?(s)/**/*.${jsOrTsExtensionGlob}`,
    `__test?(s)__/**/*.${jsOrTsExtensionGlob}`,
    `*.{spec,test}.${jsOrTsExtensionGlob}`,
  ]

  const rules: FlatConfigRules = {
    'no-empty-pattern': 'off',
    'max-lines-per-function': 'off',
  }
  if (options.typescript) {
    Object.assign(rules, {
      '@typescript-eslint/no-non-null-assertion': 'off',
    })
  }

  const testConfigs: FlatConfigs = [{ files, name: 'test', rules }]
  return testConfigs
}
