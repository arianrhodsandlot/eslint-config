import { mapValues } from 'es-toolkit/compat'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import { tsGlob } from '../../lib/constants.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getJsdocConfigs() {
  const { options } = getContext()

  if (!options.jsdoc) {
    return []
  }

  const jsdocConfigs: FlatConfigs = [
    {
      name: 'jsdoc',
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
    {
      files: [tsGlob],
      name: 'jsdoc',
      rules: mapValues(eslintPluginJsdoc.configs['flat/recommended'].rules, () => 'off'),
    },
  ]

  return jsdocConfigs
}
