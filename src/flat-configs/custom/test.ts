import { jsOrTsExtensionGlob } from '../../lib/constants.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getTestConfigs() {
  const { options } = getContext()

  const files = [
    `test?(s)/**/*${jsOrTsExtensionGlob}`,
    `__test?(s)__/**/*${jsOrTsExtensionGlob}`,
    `*.{spec,test}${jsOrTsExtensionGlob}`,
  ]

  const rules: FlatConfigRules = {
    'max-lines-per-function': 'off',
    'no-empty-pattern': 'off',
  }
  if (options.typescript) {
    Object.assign(rules, {
      '@typescript-eslint/no-non-null-assertion': 'off',
    })
  }
  if (options.react) {
    Object.assign(rules, {
      'react-hooks/rules-of-hooks': 'off',
    })
  }

  const testConfigs: FlatConfigs = [{ files, name: 'test', rules }]
  return testConfigs
}
