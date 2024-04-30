import type { FlatConfigs } from '../../types/eslint.js'

export function getImportConfigs() {
  const importConfigs: FlatConfigs = [
    {
      name: 'import',
      settings: {
        'import/extensions': [
          '.js',
          '.mjs',
          '.cjs',
          '.jsx',
          '.mjsx',
          '.cjsx',
          '.ts',
          '.mts',
          '.cts',
          '.tsx',
          '.mtsx',
          '.ctsx',
          '.json',
        ],
        'import/internal-regex': '^(@|~)/',
      },
    },
  ]
  return importConfigs
}
