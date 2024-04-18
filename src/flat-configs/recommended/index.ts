import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'
import { baseConfigs } from './base.js'
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
import { securityConfigs } from './security.js'
import { sonarjsConfigs } from './sonarjs.js'
import { tsdocConfigs } from './tsdoc.js'
import { typescriptConfigs } from './typescript.js'
import { unicornConfigs } from './unicorn.js'
import { vueConfigs } from './vue.js'

const optionalConfigsMap = {
  eslintComments: eslintCommentsConfigs,
  import: importConfigs,
  jsdoc: jsdocConfigs,
  markdown: markdownConfigs,
  n: nConfigs,
  next: nextConfigs,
  perfectionist: perfectionistConfigs,
  promise: promiseConfigs,
  react: reactConfigs,
  security: securityConfigs,
  sonarjs: sonarjsConfigs,
  tsdoc: tsdocConfigs,
  typescript: typescriptConfigs,
  unicorn: unicornConfigs,
  vue: vueConfigs,
}

export function getRecommendedFlatConfigs() {
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

  return recommendedFlatConfigs
}
