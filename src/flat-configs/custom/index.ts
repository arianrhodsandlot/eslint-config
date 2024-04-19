import { getConflictConfigs } from './conflicts.js'
import { getCustomRulesConfigs } from './custom-rules/index.js'
import { getImportConfigs } from './import.js'
import { getJsdocConfigs } from './jsdoc.js'
import { getMarkdownConfigs } from './markdown.js'
import { getTestConfigs } from './test.js'

export function getCustomFlatConfigs() {
  return [
    ...getCustomRulesConfigs(),
    ...getConflictConfigs(),
    ...getImportConfigs(),
    ...getJsdocConfigs(),
    ...getMarkdownConfigs(),
    ...getTestConfigs(),
  ]
}
