import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import _ from 'lodash'

export function getGitIgnores() {
  try {
    const root = `${execSync('git rev-parse --show-toplevel')}`.trim()
    const gitignorePath = path.resolve(root, '.gitignore')
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8')
    return _.compact(gitignoreContent.split('\n'))
  } catch {
    return []
  }
}
