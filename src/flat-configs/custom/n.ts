import { mapValues } from 'lodash'
import { jsxOrTsxGlob } from '../../lib/constants.js'
import { eslintPluginN } from '../../lib/eslint-plugins.js'

export function getNConfigs() {
  return [
    {
      files: [jsxOrTsxGlob, '**/*.vue'],
      rules: mapValues(eslintPluginN.configs['flat/recommended'], () => 'off'),
    },
  ]
}
