import type { Configuration } from '@biomejs/js-api'
import eslintPluginBiomeX from 'eslint-plugin-biome-x'
import type { FlatConfigs } from '../../types/eslint.js'

const biomeConfig: Configuration = {
  formatter: {
    indentStyle: 'space',
    lineWidth: 120,
  },
  javascript: {
    formatter: {
      jsxQuoteStyle: 'single',
      quoteStyle: 'single',
      semicolons: 'asNeeded',
    },
  },
  linter: {
    rules: {
      a11y: {
        noLabelWithoutControl: 'off',
      },
      security: {
        noGlobalEval: 'off',
      },
      suspicious: {
        noExplicitAny: 'off',
        noImplicitAnyLet: 'off',
      },
    },
  },
}

export const biomeXConfigs: FlatConfigs = [
  eslintPluginBiomeX.configs.recommended,
  {
    settings: {
      'biome-x': {
        biomeConfig,
      },
    },
  },
]
