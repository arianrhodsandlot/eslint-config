import { configForJs, configForTsWithTypeChecking, configForTsWithoutTypeChecking } from './src/core/configs.js'

export const config = [configForJs, configForTsWithoutTypeChecking]
export const configWithTypeChecking = [configForJs, configForTsWithTypeChecking]
export { createConfig } from './src/create-config.js'
export { configForJs, configForTsWithTypeChecking, configForTsWithoutTypeChecking }
