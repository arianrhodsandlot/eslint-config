const { createConfig } = require('@arianrhodsandlot/eslint-config')

module.exports = createConfig({
  append: [
    {
      rules: { '@typescript-eslint/ban-ts-comment': 'off' },
    },
  ],
})
