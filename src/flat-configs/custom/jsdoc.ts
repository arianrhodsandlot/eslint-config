import _ from 'lodash'
import { tsGlob } from '../../lib/constants.js'
import { eslintPluginJsdoc } from '../../lib/eslint-plugins.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

const { mapValues } = _

export function getJsdocConfigs() {
  const { options } = getContext()

  if (!options.jsdoc) {
    return []
  }

  const jsdocConfigs: FlatConfigs = [
    {
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
    {
      files: [tsGlob],
      rules: mapValues(eslintPluginJsdoc.configs['flat/recommended'].rules, () => 'off'),
    },
  ]

  return jsdocConfigs
}
