import { defineConfig } from 'rollup'

const entryFileNames = 'eslint-config.js'

export default defineConfig({
  input: 'src/main.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      entryFileNames,
    },
    {
      dir: 'dist/es',
      format: 'es',
      entryFileNames,
    },
  ],
})
