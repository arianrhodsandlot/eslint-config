import { eslintPluginMarkdown } from '../../lib/eslint-plugins.js'
import type { FlatConfig, FlatConfigs } from '../../types/eslint.js'

export const markdownConfigs: FlatConfigs = eslintPluginMarkdown.configs.recommended.map((config: FlatConfig) => ({
  name: 'markdown/recommended',
  ...config,
}))
