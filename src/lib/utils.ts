import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import _ from 'lodash'
import { findSync } from 'new-find-package-json'

let gitIgnores: string[]
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

export function mergeWithConcat(object: any, source: any) {
  _.mergeWith(object, source, (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return [...objValue, ..._.castArray(srcValue)]
    }
  })
  return object
}

const packageJsons = [...findSync(process.cwd())]
export function isPackageAvailable(packageName: string) {
  for (const packageJson of packageJsons) {
    try {
      const packageInfo = JSON.parse(fs.readFileSync(packageJson, 'utf8'))
      const found = packageName in packageInfo.dependencies || packageName in packageInfo.devDependencies
      if (found) {
        return true
      }
    } catch {}
  }
  return false
}
