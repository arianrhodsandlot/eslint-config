const { createConfig: createNormalConfig } = require('@arianrhodsandlot/eslint-config')

let createDebugConfig
try {
  // @ts-expect-error debug package
  createDebugConfig = require('./dist/umd').createConfig
} catch {}

const isDebug = false
const createConfig = isDebug ? createDebugConfig : createNormalConfig

module.exports = createConfig({
  append: [{ rules: { '@typescript-eslint/ban-ts-comment': 'off' } }],
})
