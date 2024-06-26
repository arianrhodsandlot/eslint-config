import { deepEqual } from 'node:assert'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'
// @ts-expect-error unknown loadESLint api from the community types
import { type ESLint, loadESLint } from 'eslint'
import debounceMessages from './messages/debounce.json'
import explicitReturnTypeUtilsMessages from './messages/explicit-return-type-utils.json'
import sidebarNavMessages from './messages/sidebar-nav.json'
import typescriptCheatsheetsReactMessages from './messages/typescript-cheatsheets-react.json'

const testsDir = path.dirname(fileURLToPath(import.meta.url))
const inputsDir = path.join(testsDir, 'inputs')

describe('ESLint config', async () => {
  const TestESLint: typeof ESLint = await loadESLint({ cwd: inputsDir })
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
})
