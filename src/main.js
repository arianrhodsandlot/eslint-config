import {
  configForJs,
  configForTsWithTypeChecking,
  configForTsWithoutTypeChecking,
  configGlobalIgnore,
} from './core/configs.js'
import { createConfig } from './create-config.js'

export const config = createConfig()
export const configWithTypeChecking = createConfig({ typeChecking: true })
export { createConfig }
export { configForJs, configForTsWithTypeChecking, configForTsWithoutTypeChecking }
