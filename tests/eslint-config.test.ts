import path from 'node:path'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { loadESLint } from 'eslint'

const testsDir = path.dirname(fileURLToPath(import.meta.url))
const inputsDir = path.join(testsDir, 'inputs')

describe('ESLint config', async () => {
  const TestESLint = await loadESLint()
  const eslint = new TestESLint({ ignore: false })

  const inputFiles = [
    'test-css.css',
    'test-js.js',
    'test-json.json',
    'test-md.md',
    'test-ts.ts',
    'test-tsx.tsx',
    'test-vue.vue',
  ]
  for (const inputFile of inputFiles) {
    await test(inputFile, async (t) => {
      const file = path.join(inputsDir, inputFile)
      const [{ messages }] = await eslint.lintFiles(file)
      for (const message of messages) {
        t.assert.snapshot(message)
      }
    })
  }
})
