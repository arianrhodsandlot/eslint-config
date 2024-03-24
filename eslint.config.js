import { createConfig } from '@arianrhodsandlot/eslint-config'

export default createConfig({
  append: [{ rules: { '@typescript-eslint/ban-ts-comment': 'off' } }],
})
