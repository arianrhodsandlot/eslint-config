import { Linter } from 'eslint'
import type { FlatConfigRules } from '../../../types/eslint.js'

const eslintMajorVersion = Number.parseInt(Linter.version, 10)

export const nonCompatibleRules: FlatConfigRules =
  eslintMajorVersion > 8
    ? {
        'promise/no-multiple-resolved': 'off',
      }
    : {}
