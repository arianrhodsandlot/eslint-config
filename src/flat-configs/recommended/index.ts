import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'
import { baseConfigs } from './base.js'
import { compatConfigs } from './compat.js'
import { diffConfigs } from './diff.js'
import { getEsXConfigs } from './es-x.js'
import { eslintCommentsConfigs } from './eslint-comments.js'
import { importConfigs } from './import.js'
import { jsdocConfigs } from './jsdoc.js'
import { markdownConfigs } from './markdown.js'
import { nConfigs } from './n.js'
import { nextConfigs } from './next.js'
import { perfectionistConfigs } from './perfectionist.js'
import { getPrettierConfigs } from './prettier.js'
import { promiseConfigs } from './promise.js'
import { reactConfigs } from './react.js'
import { regexpConfigs } from './regexp.js'
import { securityConfigs } from './security.js'
import { sonarjsConfigs } from './sonarjs.js'
import { tailwindcssConfigs } from './tailwind.js'
import { tsdocConfigs } from './tsdoc.js'
import { typescriptConfigs } from './typescript.js'
import { unicornConfigs } from './unicorn.js'
import { vueConfigs } from './vue.js'

export function getRecommendedFlatConfigs() {
  const optionalConfigsMap = {
    compat: compatConfigs,
    eslintComments: eslintCommentsConfigs,
    esX: getEsXConfigs(),
    import: importConfigs,
    jsdoc: jsdocConfigs,
    markdown: markdownConfigs,
    n: nConfigs,
    next: nextConfigs,
    perfectionist: perfectionistConfigs,
    promise: promiseConfigs,
    react: reactConfigs,
    regexp: regexpConfigs,
    security: securityConfigs,
    sonarjs: sonarjsConfigs,
    tailwindcss: tailwindcssConfigs,
    tsdoc: tsdocConfigs,
    typescript: typescriptConfigs,
    unicorn: unicornConfigs,
    vue: vueConfigs,
  }

  const recommendedFlatConfigs: FlatConfigs = [...baseConfigs]

  const { options } = getContext()

  for (const key in optionalConfigsMap) {
    const optionalConfigsName = key as keyof typeof optionalConfigsMap
    if (options[optionalConfigsName]) {
      recommendedFlatConfigs.push(...optionalConfigsMap[optionalConfigsName])
    }
  }

  if (options.prettier) {
    recommendedFlatConfigs.push(...getPrettierConfigs())
  }

  if (options.diff) {
    recommendedFlatConfigs.push(...diffConfigs)
  }

  return recommendedFlatConfigs
}
