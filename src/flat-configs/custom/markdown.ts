import { jsOrTsExtensionGlob } from '../../lib/constants.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getMarkdownConfigs() {
  const { options } = getContext()

  const rules: FlatConfigRules = {
    'no-console': 'off',
  }

  if (options.typescript) {
    Object.assign(rules, {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',
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

  const markdownConfigs: FlatConfigs = [{ files: [`**/*.md/*${jsOrTsExtensionGlob}`], rules }]
  return markdownConfigs
}
