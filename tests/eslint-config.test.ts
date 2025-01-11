import { deepEqual } from 'node:assert'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { loadESLint } from 'eslint'

const testsDir = path.dirname(fileURLToPath(import.meta.url))
const inputsDir = path.join(testsDir, 'inputs')
const messagesDir = path.join(testsDir, 'messages')

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
    await test(inputFile, async () => {
      const messagesFileName = path.format({ ...path.parse(inputFile), base: undefined, ext: '.json' })
      const messagesPath = path.join(messagesDir, messagesFileName)
      const expectedMessages = JSON.parse(readFileSync(messagesPath, 'utf8'))
      const file = path.join(inputsDir, inputFile)
      const [{ messages }] = await eslint.lintFiles(file)
      writeFileSync(messagesPath, JSON.stringify(messages, null, 2))
      deepEqual(messages, expectedMessages)
    })
  }
})
