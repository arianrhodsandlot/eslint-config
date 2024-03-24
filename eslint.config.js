import { createConfig as createNormalConfig } from '@arianrhodsandlot/eslint-config'

let createDebugConfig
try {
  const mod = await import('./dist/esm/index.js')
  createDebugConfig = mod.createConfig
} catch {}

const isDebug = false
const createConfig = isDebug ? createDebugConfig : createNormalConfig

// @ts-expect-error only has error when debug
export default createConfig({
  append: [{ rules: { '@typescript-eslint/ban-ts-comment': 'off' } }],
})
