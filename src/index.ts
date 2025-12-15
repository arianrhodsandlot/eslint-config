import { createConfig } from './create-config.js'

export const config = createConfig()
export { createConfig }
export default config
export const looseConfig = createConfig({ typeaware: false })
export * from '@eslint/config-helpers'
