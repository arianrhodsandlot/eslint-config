import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import _ from 'lodash'

let gitIgnores
export function getGitIgnores() {
  if (gitIgnores) {
    return gitIgnores
  }
  try {
    const root = `${execSync('git rev-parse --show-toplevel')}`.trim()
    const gitignorePath = path.resolve(root, '.gitignore')
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8')
    gitIgnores = _.compact(gitignoreContent.split('\n'))
  } catch {
    gitIgnores = []
  }
  return gitIgnores
}

export function mergeWithConcat(object, source) {
  _.mergeWith(object, source, (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return [...objValue, ..._.castArray(srcValue)]
    }
  })
  return object
}
