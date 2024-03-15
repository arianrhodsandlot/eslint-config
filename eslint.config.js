const { createConfig: createNormalConfig } = require('@arianrhodsandlot/eslint-config')
// @ts-expect-error debug package
const { createConfig: createDebugConfig } = require('./dist/umd')

const isDebug = !false
const createConfig = isDebug ? createDebugConfig : createNormalConfig

module.exports = createConfig({
  append: [{ rules: { '@typescript-eslint/ban-ts-comment': 'off' } }],
})
