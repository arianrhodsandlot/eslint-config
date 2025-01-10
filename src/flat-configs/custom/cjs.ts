import { cjsOrCtsGlob } from '../../lib/constants.js'
import { getContext } from '../../lib/utils.ts'
import type { FlatConfigRules, FlatConfigs } from '../../types/eslint.js'

export function getCJSConfigs() {
  const { options } = getContext()
  const rules: FlatConfigRules = {}

  if (options.typescript) {
    Object.assign(rules, {
      '@typescript-eslint/no-require-imports': 'off',
    })
  }

  if (options.unicorn) {
    Object.assign(rules, {
      'unicorn/prefer-module': 'off',
    })
  }

  const cjsConfigs: FlatConfigs = [
    {
      files: [cjsOrCtsGlob],
      name: 'cjs',
      rules,
    },
  ]

  return cjsConfigs
}
