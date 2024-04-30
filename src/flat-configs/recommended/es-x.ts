import { eslintPluginEsX } from '../../lib/eslint-plugins.js'
import { getContext } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getEsXConfigs() {
  const { options } = getContext()
  if (!options.esX) {
    return []
  }

  const esXOption = Array.isArray(options.esX) ? options.esX : [options.esX === true ? 'no-new-in-esnext' : options.esX]
  const name = 'es-x/recommended'
  const esXConfigs: FlatConfigs = [
    { name, plugins: { 'es-x': eslintPluginEsX } },
    ...esXOption.map((esXConfigName) => ({ name, ...eslintPluginEsX.configs[`flat/${esXConfigName}`] })),
  ]

  return esXConfigs
}
