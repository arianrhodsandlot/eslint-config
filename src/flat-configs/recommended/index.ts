import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'
import { baseConfigs } from './base.js'
import { eslintCommentsConfigs } from './eslint-comments.js'
import { importConfigs } from './import.js'
import { markdownConfigs } from './markdown.js'
import { nConfigs } from './n.js'
import { nextConfigs } from './next.js'
import { perfectionistConfigs } from './perfectionist.js'
import { getPrettierConfigs } from './prettier.js'
import { promiseConfigs } from './promise.js'
import { reactConfigs } from './react.js'
import { securityConfigs } from './security.js'
import { sonarjsConfigs } from './sonarjs.js'
import { typescriptConfigs } from './typescript.js'
import { unicornConfigs } from './unicorn.js'
import { vueConfigs } from './vue.js'

export function getRecommendedFlatConfigs() {
  const recommendedFlatConfigs: FlatConfigs = [...baseConfigs]

  const { options } = getContext()

  if (options.eslintComments) {
    recommendedFlatConfigs.push(...eslintCommentsConfigs)
  }
  if (options.import) {
    recommendedFlatConfigs.push(...importConfigs)
  }
  if (options.markdown) {
    recommendedFlatConfigs.push(...markdownConfigs)
  }
  if (options.n) {
    recommendedFlatConfigs.push(...nConfigs)
  }
  if (options.next) {
    recommendedFlatConfigs.push(...nextConfigs)
  }
  if (options.perfectionist) {
    recommendedFlatConfigs.push(...perfectionistConfigs)
  }
  if (options.promise) {
    recommendedFlatConfigs.push(...promiseConfigs)
  }
  if (options.react) {
    recommendedFlatConfigs.push(...reactConfigs)
  }
  if (options.security) {
    recommendedFlatConfigs.push(...securityConfigs)
  }
  if (options.sonarjs) {
    recommendedFlatConfigs.push(...sonarjsConfigs)
  }
  if (options.typescript) {
    recommendedFlatConfigs.push(...typescriptConfigs)
  }
  if (options.unicorn) {
    recommendedFlatConfigs.push(...unicornConfigs)
  }
  if (options.vue) {
    recommendedFlatConfigs.push(...vueConfigs)
  }

  if (options.prettier) {
    recommendedFlatConfigs.push(...getPrettierConfigs())
  }

  return recommendedFlatConfigs
}
