import { jsxOrTsxExtensionGlob } from '../../lib/constants.js'
import { getContext, isPackageInstalled } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getReactConfigs() {
  const { options } = getContext()

  const reactConfigs: FlatConfigs = []

  const multipleExportsFiles: string[] = []
  if (options.react && isPackageInstalled('next')) {
    multipleExportsFiles.push(`**/layout${jsxOrTsxExtensionGlob}`)
  }
  if (multipleExportsFiles.length > 0) {
    reactConfigs.push({
      files: multipleExportsFiles,
      name: 'react',
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    })
  }

  return reactConfigs
}
