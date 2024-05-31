import { jsxOrTsxGlob } from '../../lib/constants.js'
import { getContext, isPackageInstalled } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

function getAllowExportNames() {
  const allowExportNames: string[] = []
  if (isPackageInstalled('next')) {
    allowExportNames.push(
      'config',
      'generateMetadata',
      'generateStaticParams',
      'generateViewport',
      'metadata',
      'viewport',
    )
  }
  if (isPackageInstalled('remix')) {
    allowExportNames.push('meta', 'links', 'headers', 'loader', 'action')
  }
  return allowExportNames
}

export function getReactConfigs() {
  const { options } = getContext()

  const reactConfigs: FlatConfigs = []

  if (options.react) {
    reactConfigs.push({
      files: [jsxOrTsxGlob],
      name: 'react',
      rules: {
        'max-lines-per-function': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
        'react-refresh/only-export-components': [
          'error',
          { allowConstantExport: true, allowExportNames: getAllowExportNames() },
        ],
      },
    })
  }

  return reactConfigs
}
