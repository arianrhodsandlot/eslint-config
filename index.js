import {
  configForJs,
  configForTsWithTypeChecking,
  configForTsWithoutTypeChecking,
  configGlobalIgnore,
} from './src/core/configs.js'

export const config = [configGlobalIgnore, configForJs, configForTsWithoutTypeChecking]
export const configWithTypeChecking = [configGlobalIgnore, configForJs, configForTsWithTypeChecking]
export { createConfig } from './src/create-config.js'
export { configForJs, configForTsWithTypeChecking, configForTsWithoutTypeChecking }
