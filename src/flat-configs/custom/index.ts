import { getCJSConfigs } from './cjs.js'
import { getConflictConfigs } from './conflicts.js'
import { getCustomRulesConfigs } from './custom-rules/index.js'
import { getImportConfigs } from './import.js'
import { getJsConfigs } from './js.js'
import { getJsdocConfigs } from './jsdoc.js'
import { getMarkdownConfigs } from './markdown.js'
import { getNConfigs } from './n.js'
import { getReactConfigs } from './react.js'
import { getTailwindConfigs } from './tailwind.js'
import { getTestConfigs } from './test.js'
import { getTypeScriptConfigs } from './typescript.js'

export function getCustomFlatConfigs() {
  return [
    ...getCustomRulesConfigs(),

    ...getCJSConfigs(),
    ...getImportConfigs(),
    ...getJsConfigs(),
    ...getJsdocConfigs(),
    ...getMarkdownConfigs(),
    ...getNConfigs(),
    ...getReactConfigs(),
    ...getTailwindConfigs(),
    ...getTestConfigs(),
    ...getTypeScriptConfigs(),

    ...getConflictConfigs(),
  ]
}
