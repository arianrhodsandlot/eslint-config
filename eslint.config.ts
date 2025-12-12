import { createConfig, globalIgnores } from './src/index.ts'

export default createConfig({
  append: globalIgnores(['tests/inputs']),
})
