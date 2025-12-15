import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import type { FlatConfigs } from '../../types/eslint.js'

export const unicornConfigs: FlatConfigs = [{ name: 'unicorn/recommended', ...eslintPluginUnicorn.configs.recommended }]
