import { getPackageField, isServerProject } from '../../../lib/utils.js'
import type { FlatConfigRules } from '../../../types/eslint.js'

const isESMCodeBase = isServerProject() && getPackageField('type') === 'module'

export const importRules: FlatConfigRules = {
  'import-x/default': 'off',
  'import-x/extensions': [
    'error',
    {
      ignorePackages: true,
      pattern: {
        json: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',

        js: isESMCodeBase ? 'always' : 'never',

        astro: 'always',
        css: 'always',
        eot: 'always',
        less: 'always',
        sass: 'always',
        scss: 'always',
        styl: 'always',
        svelte: 'always',
        vue: 'always',
        wasm: 'always',

        cjs: 'always',
        cts: 'always',
        ctsx: 'always',
        mjs: 'always',
        mjsx: 'always',
        mts: 'always',
        mtsx: 'always',

        gif: 'always',
        htm: 'always',
        html: 'always',
        ico: 'always',
        jpeg: 'always',
        jpg: 'always',
        png: 'always',
        svg: 'always',
        ttf: 'always',
        webp: 'always',
        woff: 'always',
        woff2: 'always',
      },
    },
  ],
  'import-x/first': 'error',
  'import-x/namespace': 'off',
  'import-x/newline-after-import': 'error',
  'import-x/no-absolute-path': ['error', { amd: false, commonjs: true, esmodule: true }],
  'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
  'import-x/no-dynamic-require': 'error',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-extraneous-dependencies': 'error',
  'import-x/no-named-as-default': 'off',
  'import-x/no-named-as-default-member': 'off',
  'import-x/no-named-default': 'error',
  'import-x/no-unresolved': 'off',
  'import-x/no-useless-path-segments': ['error', { noUselessIndex: !isESMCodeBase }],
  'import-x/no-webpack-loader-syntax': 'error',
  'import-x/order': [
    'error',
    {
      alphabetize: { order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      'newlines-between': 'never',
    },
  ],
}
