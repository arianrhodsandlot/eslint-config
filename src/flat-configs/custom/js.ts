import { jsGlob } from '../../lib/constants.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getJsConfigs() {
  const jsConfigs: FlatConfigs = [
    {
      files: [jsGlob],
      name: 'js',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'error',
        'unicorn/prefer-module': 'off',
      },
    },
  ]
  return jsConfigs
}
