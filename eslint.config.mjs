import { createConfig } from './dist/esm/index.js'

export default createConfig({
  extention: {
    react: true,
    next: true,
  },
  append: [
    {
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
})
