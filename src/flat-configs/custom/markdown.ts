import { sourceGlob } from '../../lib/constants.js'
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
  if (options.import) {
    Object.assign(rules, {
      'import-x/no-extraneous-dependencies': 'off',
    })
  }
  if (options.sonarjs) {
    Object.assign(rules, {
      'sonarjs/unused-import': 'off',
    })
  }

  const markdownConfigs: FlatConfigs = [{ files: [`**/*.md/${sourceGlob}`], name: 'markdown', rules }]
  return markdownConfigs
}
