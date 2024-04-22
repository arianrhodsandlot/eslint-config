export function getImportConfigs() {
  return [
    {
      rules: {
        'import/no-absolute-path': ['error', { amd: false, commonjs: true, esmodule: true }],
        'import/no-empty-named-blocks': 'error',
        'import/no-extraneous-dependencies': 'error',
      },
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
      },
    },
  ]
}
