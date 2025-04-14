import { execSync } from 'node:child_process'
import path from 'node:path'
import js from '@eslint/js'
import eslintPluginDiff from 'eslint-plugin-diff'
import tseslint from 'typescript-eslint'
import type { FlatConfigs } from '../../types/eslint.js'

const essentialBuiltinRules = Object.keys(js.configs.recommended.rules)
const essentialTsRules = tseslint.configs.recommended.flatMap(({ rules = {} }) =>
  Object.keys(rules).filter((name) => rules[name] === 'error'),
)
const essentialRules = new Set(['prettier/prettier', ...essentialBuiltinRules, ...essentialTsRules])
essentialRules.delete('vue/attributes-order')
essentialRules.delete('vue/html-self-closing')

const { postprocess, preprocess } = eslintPluginDiff.processors.diff

let rootPath = ''
try {
  rootPath = execSync('git rev-parse --show-toplevel').toString().trim()
} catch {}
function preprocessInEditor(text: string, filename: string) {
  const filePath = path.relative(rootPath, filename)
  let fileContent = ''
  try {
    fileContent = execSync(`git show HEAD:${filePath}`).toString()
  } catch {}
  return text === fileContent ? [] : preprocess(text, filename)
}

export const diffConfigs: FlatConfigs = [
  {
    name: 'diff',
    plugins: { diff: eslintPluginDiff },
    processor: {
      ...eslintPluginDiff.processors.diff,
      postprocess(messages, filename) {
        const filteredMessages = postprocess(messages, filename)
        return messages
          .flat()
          .filter(
            (message) => filteredMessages.includes(message) || (message.ruleId && essentialRules.has(message.ruleId)),
          )
      },
      preprocess(text, filename) {
        if (process.env.VSCODE_PID) {
          return preprocessInEditor(text, filename)
        }
        return preprocess(text, filename)
      },
    },
  },
]
