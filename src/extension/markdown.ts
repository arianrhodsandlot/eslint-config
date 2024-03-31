import tseslint from 'typescript-eslint'
import { eslintPluginMarkdown } from '../lib/plugins.js'

const configsForMarkdown = tseslint.config(...eslintPluginMarkdown.configs.recommended, {
  // @ts-expect-error
  name: 'markdown-js-custom',
  files: ['**/*.md/*.js'],
  rules: {
    'no-console': 'off',

    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'import/no-unresolved': 'off',
  },
})

export { configsForMarkdown }
