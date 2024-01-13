import { createConfig } from './create-config.js'

export const config = createConfig()
export const configWithTypeChecking = createConfig({ typeChecking: true })
export { createConfig }

export { configForJs, configForTsWithoutTypeChecking, configForTsWithTypeChecking } from './core/configs.js'
