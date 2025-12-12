import { tsGlob } from '../../lib/constants.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getTypeScriptConfigs() {
  const typeScriptConfigs: FlatConfigs = [
    {
      files: [tsGlob],
      name: 'typescript',
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'no-undef': 'off',
      },
    },
  ]
  return typeScriptConfigs
}
