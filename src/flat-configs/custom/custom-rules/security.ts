import type { FlatConfigRules } from '../../../types/eslint.js'

export const securityRules: FlatConfigRules = {
  'security/detect-eval-with-expression': 'off',
  'security/detect-non-literal-fs-filename': 'off',
  'security/detect-object-injection': 'off',
}
