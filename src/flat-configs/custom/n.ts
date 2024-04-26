import _ from 'lodash'
import { jsxOrTsxGlob } from '../../lib/constants.js'
import { eslintPluginN } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

const { mapValues } = _

export function getNConfigs() {
  const nConfigs: FlatConfigs = [
    {
      files: [jsxOrTsxGlob, '**/*.vue'],
      rules: mapValues(eslintPluginN.configs['flat/recommended'].rules, () => 'off'),
    },
  ]

  return nConfigs
}
