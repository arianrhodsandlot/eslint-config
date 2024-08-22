import type { FlatConfigs } from '../../types/eslint.js'

export function getImportConfigs() {
  const importConfigs: FlatConfigs = [
    {
      name: 'import',
      settings: {
        'import-x/extensions': ['.js', '.ts'],
        'import-x/internal-regex': '^(@|~)/',
      },
    },
  ]
  return importConfigs
}
