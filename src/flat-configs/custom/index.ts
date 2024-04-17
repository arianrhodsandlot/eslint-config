import { getConflictConfigs } from './conflicts.js'
import { getCustomRulesConfigs } from './custom-rules/index.js'
import { getTestConfigs } from './test.js'

export function getCustomFlatConfigs() {
  const customRulesConfigs = getCustomRulesConfigs()
  const conflictConfigs = getConflictConfigs()
  const testConfigs = getTestConfigs()
  return [...customRulesConfigs, ...conflictConfigs, ...testConfigs]
}
