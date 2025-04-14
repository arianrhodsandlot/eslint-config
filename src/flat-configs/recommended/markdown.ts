import eslintPluginMarkdown from '@eslint/markdown'
import type { FlatConfigs } from '../../types/eslint.js'

export const markdownConfigs: FlatConfigs = [
  ...eslintPluginMarkdown.configs.recommended,
  ...eslintPluginMarkdown.configs.processor,
]
