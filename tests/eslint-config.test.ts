import { deepEqual } from 'node:assert'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { loadESLint } from 'eslint'
import debounceMessages from './messages/debounce.json' with { type: 'json' }
import explicitReturnTypeUtilsMessages from './messages/explicit-return-type-utils.json' with { type: 'json' }
import sidebarNavMessages from './messages/sidebar-nav.json' with { type: 'json' }
import testCssMessages from './messages/test-css.json' with { type: 'json' }
import testJsonMessages from './messages/test-json.json' with { type: 'json' }
import typescriptCheatsheetsReactMessages from './messages/typescript-cheatsheets-react.json' with { type: 'json' }

const testsDir = path.dirname(fileURLToPath(import.meta.url))
const inputsDir = path.join(testsDir, 'inputs')

describe('ESLint config', async () => {
  const TestESLint = await loadESLint()
  const eslint = new TestESLint({ ignore: false, overrideConfigFile: path.join(inputsDir, 'eslint.config.test.js') })

  test('js file', async () => {
    const file = path.join(inputsDir, 'debounce.js')
    const [{ messages }] = await eslint.lintFiles(file)
    writeFileSync(`tests/messages/debounce.json`, JSON.stringify(messages, null, 2))
    deepEqual(messages, debounceMessages)
  })

  test('ts file', async () => {
    const file = path.join(inputsDir, 'explicit-return-type-utils.ts')
    const [{ messages }] = await eslint.lintFiles(file)
    writeFileSync(`tests/messages/explicit-return-type-utils.json`, JSON.stringify(messages, null, 2))
    deepEqual(messages, explicitReturnTypeUtilsMessages)
  })

  test('tsx file', async () => {
    const file = path.join(inputsDir, 'sidebar-nav.tsx')
    const [{ messages }] = await eslint.lintFiles(file)
    writeFileSync(`tests/messages/sidebar-nav.json`, JSON.stringify(messages, null, 2))
    deepEqual(messages, sidebarNavMessages)
  })

  test('md file', async () => {
    const file = path.join(inputsDir, 'typescript-cheatsheets-react.md')
    const [{ messages }] = await eslint.lintFiles(file)
    writeFileSync(`tests/messages/typescript-cheatsheets-react.json`, JSON.stringify(messages, null, 2))
    deepEqual(messages, typescriptCheatsheetsReactMessages)
  })

  test('css file', async () => {
    const file = path.join(inputsDir, 'test-css.css')
    const [{ messages }] = await eslint.lintFiles(file)
    writeFileSync(`tests/messages/test-css.json`, JSON.stringify(messages, null, 2))
    deepEqual(messages, testCssMessages)
  })

  test('json file', async () => {
    const file = path.join(inputsDir, 'test-json.json')
    const [{ messages }] = await eslint.lintFiles(file)
    writeFileSync(`tests/messages/test-json.json`, JSON.stringify(messages, null, 2))
    deepEqual(messages, testJsonMessages)
  })
})
