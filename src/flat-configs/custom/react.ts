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

  const reactConfigs: FlatConfigs = [
    {
      files: [jsxOrTsxGlob],
      name: 'react',
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ]

  if (options.react) {
    reactConfigs.push({
      name: 'react',
      rules: {
        'react-refresh/only-export-components': [
          'error',
          { allowConstantExport: true, allowExportNames: getAllowExportNames() },
        ],
      },
    })

    if (isPackageInstalled('next') || isPackageInstalled('remix') || isPackageInstalled('waku')) {
      reactConfigs.push({
        files: ['src/pages/**/*', 'src/app/**/*'],
        name: 'react',
        rules: {
          '@eslint-react/naming-convention/filename': 'off',
        },
      })
    }
  }

  return reactConfigs
}
