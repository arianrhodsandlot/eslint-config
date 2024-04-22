import _ from 'lodash'
import { tsGlob } from '../../lib/constants.js'
import { eslintPluginJsdoc } from '../../lib/eslint-plugins.js'
import { getContext } from '../../lib/utils.js'

const { mapValues } = _

export function getJsdocConfigs() {
  const { options } = getContext()

  if (!options.jsdoc) {
    return []
  }

  return [
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
}
