import { jsGlob } from '../../lib/constants.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getJsConfigs() {
  const jsConfigs: FlatConfigs = [
    {
      files: [jsGlob],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ]
  return jsConfigs
}
