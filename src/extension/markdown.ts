import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'
import { eslintPluginMarkdown } from '../lib/plugins.js'

const configsForMarkdown = tseslint.config(...eslintPluginMarkdown.configs.recommended, {
  files: ['**/*.md/*.js'],
  // @ts-expect-error
  name: 'markdown-js-custom',
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off',

    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': 'off',

    'no-console': 'off',
  },
}) as Linter.FlatConfig[]

export { configsForMarkdown }
