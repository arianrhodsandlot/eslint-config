import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'
import { baseConfigs } from './base.js'
import { biomeXConfigs } from './biome-x.js'
import { compatConfigs } from './compat.js'
import { cssConfigs } from './css.js'
import { diffConfigs } from './diff.js'
import { getEsXConfigs } from './es-x.js'
import { eslintCommentsConfigs } from './eslint-comments.js'
import { importConfigs } from './import.js'
import { jsdocConfigs } from './jsdoc.js'
import { jsonConfigs } from './json.js'
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
import { stylisticConfigs } from './stylistic.js'
import { tailwindcssConfigs } from './tailwind.js'
import { tsdocConfigs } from './tsdoc.js'
import { typescriptConfigs } from './typescript.js'
import { unicornConfigs } from './unicorn.js'
import { vueI18nConfigs } from './vue-i18n.js'
import { vueConfigs } from './vue.js'

export function getRecommendedFlatConfigs() {
  const optionalConfigsMap = {
    biomeX: biomeXConfigs,
    compat: compatConfigs,
    css: cssConfigs,
    eslintComments: eslintCommentsConfigs,
    esX: getEsXConfigs(),
    import: importConfigs,
    jsdoc: jsdocConfigs,
    json: jsonConfigs,
    markdown: markdownConfigs,
    n: nConfigs,
    next: nextConfigs,
    perfectionist: perfectionistConfigs,
    promise: promiseConfigs,
    react: reactConfigs,
    regexp: regexpConfigs,
    security: securityConfigs,
    sonarjs: sonarjsConfigs,
    stylistic: stylisticConfigs,
    tailwindcss: tailwindcssConfigs,
    tsdoc: tsdocConfigs,
    typescript: typescriptConfigs,
    unicorn: unicornConfigs,
    vue: vueConfigs,
    vueI18n: vueI18nConfigs,
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
