import { getPackageField, isServerProject } from '../../../lib/utils.js'
import type { FlatConfigRules } from '../../../types/eslint.js'

const isESMCodeBase = isServerProject() && getPackageField('type') === 'module'

export const importRules: FlatConfigRules = {
  'import/default': 'off',
  'import/extensions': [
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
  'import/first': 'error',
  'import/namespace': 'off',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': ['error', { amd: false, commonjs: true, esmodule: true }],
  'import/no-duplicates': ['error', { 'prefer-inline': true }],
  'import/no-dynamic-require': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'error',
  'import/no-unresolved': 'off',
  'import/no-useless-path-segments': ['error', { noUselessIndex: !isESMCodeBase }],
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      'newlines-between': 'never',
    },
  ],
}
