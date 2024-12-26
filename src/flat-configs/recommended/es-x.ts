import { eslintPluginEsX } from '../../lib/eslint-plugins.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getEsXConfigs() {
  const { options } = getContext()
  if (!options.esX) {
    return []
  }

  let esXOption: string[]
  if (Array.isArray(options.esX)) {
    esXOption = options.esX
  } else if (options.esX) {
    esXOption = ['no-new-in-esnext']
  } else {
    esXOption = [options.esX]
  }

  const name = 'es-x/recommended'
  const esXConfigs: FlatConfigs = [
    { name, plugins: { 'es-x': eslintPluginEsX } },
    ...esXOption.map((esXConfigName) => ({ name, ...eslintPluginEsX.configs[`flat/${esXConfigName}`] })),
  ]

  return esXConfigs
}
