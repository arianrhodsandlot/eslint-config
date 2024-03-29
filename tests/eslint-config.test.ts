import { deepEqual } from 'node:assert'
import { dirname, join } from 'node:path'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'
// @ts-expect-error
import { type ESLint, loadESLint } from 'eslint'
import { debounceMessages } from './messages/debounce'
import { explicitReturnTypeUtilsMessages } from './messages/explicit-return-type-utils'
import { sidebarNavMessages } from './messages/sidebar-nav'
import { typescriptCheatsheetsReactMessages } from './messages/typescript-cheatsheets-react'

const testsDir = dirname(fileURLToPath(import.meta.url))
const inputsDir = join(testsDir, 'inputs')

describe('ESLint config', async () => {
  const TestESLint: typeof ESLint = await loadESLint({ cwd: inputsDir })
  const eslint = new TestESLint({ ignore: false, overrideConfigFile: join(inputsDir, 'eslint.config.js') })

  test('js file', async () => {
    const file = join(inputsDir, 'debounce.js')
    const [{ messages }] = await eslint.lintFiles(file)
    deepEqual(messages, debounceMessages)
  })

  test('ts file', async () => {
    const file = join(inputsDir, 'explicit-return-type-utils.ts')
    const [{ messages }] = await eslint.lintFiles(file)
    deepEqual(messages, explicitReturnTypeUtilsMessages)
  })

  test('tsx file', async () => {
    const file = join(inputsDir, 'sidebar-nav.tsx')
    const [{ messages }] = await eslint.lintFiles(file)
    deepEqual(messages, sidebarNavMessages)
  })

  test('md file', async () => {
    const file = join(inputsDir, 'typescript-cheatsheets-react.md')
    const [{ messages }] = await eslint.lintFiles(file)
    deepEqual(messages, typescriptCheatsheetsReactMessages)
  })
})
