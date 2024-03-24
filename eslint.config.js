import { createConfig } from 'eslint-config'

export default createConfig({
  append: [
    {
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
})
