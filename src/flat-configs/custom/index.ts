import { getConflictConfigs } from './conflicts.js'
import { getCustomRulesConfigs } from './custom-rules/index.js'
import { getJsdocConfigs } from './jsdoc.js'
import { getMarkdownConfigs } from './markdown.js'
import { getTestConfigs } from './test.js'

export function getCustomFlatConfigs() {
  const customRulesConfigs = getCustomRulesConfigs()

  const conflictConfigs = getConflictConfigs()
  const jsdocConfigs = getJsdocConfigs()
  const markdownConfigs = getMarkdownConfigs()
  const testConfigs = getTestConfigs()

  return [...customRulesConfigs, ...conflictConfigs, ...jsdocConfigs, ...markdownConfigs, ...testConfigs]
}
