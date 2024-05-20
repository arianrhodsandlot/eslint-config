import { tsGlob } from '../../lib/constants.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getTypeScriptConfigs() {
  const typeScriptConfigs: FlatConfigs = [
    {
      files: [tsGlob],
      name: 'typescript',
      rules: {
        'no-undef': 'off',
      },
    },
  ]
  return typeScriptConfigs
}
