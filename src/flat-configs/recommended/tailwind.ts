import { eslintPluginTailwindcss } from '../../lib/eslint-plugins.js'
import type { FlatConfigs } from '../../types/eslint.js'

export const tailwindcssConfigs: FlatConfigs = [
  {
    plugins: { tailwindcss: eslintPluginTailwindcss },
    rules: eslintPluginTailwindcss.configs?.recommended.rules,
  },
]
