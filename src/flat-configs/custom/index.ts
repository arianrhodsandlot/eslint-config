import { getConflictConfigs } from './conflicts.js'
import { getCustomRulesConfigs } from './custom-rules/index.js'
import { getImportConfigs } from './import.js'
import { getJsConfigs } from './js.js'
import { getJsdocConfigs } from './jsdoc.js'
import { getMarkdownConfigs } from './markdown.js'
import { getNConfigs } from './n.js'
import { getTestConfigs } from './test.js'

export function getCustomFlatConfigs() {
  return [
    ...getCustomRulesConfigs(),

    ...getImportConfigs(),
    ...getJsConfigs(),
    ...getJsdocConfigs(),
    ...getMarkdownConfigs(),
    ...getNConfigs(),
    ...getTestConfigs(),

    ...getConflictConfigs(),
  ]
}
