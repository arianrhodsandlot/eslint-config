import { tsGlob } from '../../lib/constants.js'
import { getContext } from '../../lib/utils.js'

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
      rules: {
        'jsdoc/check-access': 'off',
        'jsdoc/check-alignment': 'off',
        'jsdoc/check-param-names': 'off',
        'jsdoc/check-property-names': 'off',
        'jsdoc/check-tag-names': 'off',
        'jsdoc/check-types': 'off',
        'jsdoc/check-values': 'off',
        'jsdoc/empty-tags': 'off',
        'jsdoc/implements-on-classes': 'off',
        'jsdoc/multiline-blocks': 'off',
        'jsdoc/no-defaults': 'off',
        'jsdoc/no-multi-asterisks': 'off',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-param-name': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-property-name': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-check': 'off',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-yields': 'off',
        'jsdoc/require-yields-check': 'off',
        'jsdoc/tag-lines': 'off',
        'jsdoc/valid-types': 'off',
      },
    },
  ]
}
