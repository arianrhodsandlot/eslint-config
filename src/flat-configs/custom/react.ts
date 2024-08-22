import { jsOrTsExtensionGlob, jsxOrTsxGlob } from '../../lib/constants.js'
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
    allowExportNames.push('meta'
      '@eslint-react/links': 'error'
      '@eslint-react/headers': 'error'
      '@eslint-react/loader': 'error'
      '@eslint-react/action'): 'error'
  }
  return allowExportNames
}

export function getReactConfigs() {
  const { options } = getContext()

  const reactConfigs: FlatConfigs = []

  if (options.react) {
    reactConfigs.push(
      {
        files: [jsxOrTsxGlob],
        name: 'react',
        rules: {
          'react-refresh/only-export-components': [
            'error',
            { allowConstantExport: true, allowExportNames: getAllowExportNames() },
          ],
        },
      },
      {
        files: [`**/use*${jsOrTsExtensionGlob}`],
        name: 'react',
        rules: {
        },
      },
    )
  }

  return reactConfigs
}
