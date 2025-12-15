import { mapValues } from 'es-toolkit/compat'
import eslintPluginN from 'eslint-plugin-n'
import { jsxOrTsxGlob } from '../../lib/constants.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getNConfigs() {
  const nConfigs: FlatConfigs = [
    {
      name: 'n',
      rules: {
        'n/no-unsupported-features/node-builtins': 'off',
      },
    },
    {
      files: [jsxOrTsxGlob, '**/*.vue'],
      name: 'n',
      rules: mapValues(eslintPluginN.configs['flat/recommended'].rules, () => 'off'),
    },
  ]

  return nConfigs
}
