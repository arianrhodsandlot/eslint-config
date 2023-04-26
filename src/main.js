import {
  configForJs,
  configForTsWithTypeChecking,
  configForTsWithoutTypeChecking,
  configGlobalIgnore,
} from './core/configs.js'

export const config = [configGlobalIgnore, configForJs, configForTsWithoutTypeChecking]
export const configWithTypeChecking = [configGlobalIgnore, configForJs, configForTsWithTypeChecking]
export { createConfig } from './create-config.js'
export { configForJs, configForTsWithTypeChecking, configForTsWithoutTypeChecking }
