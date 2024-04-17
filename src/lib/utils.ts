import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import _ from 'lodash'
import { findSync } from 'new-find-package-json'
import type { CreateConfigOptions } from '../types/config.js'

export const isProduction = process.env.NODE_ENV === 'production'

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
export function getPackageVersion(packageName: string) {
  for (const packageJson of packageJsons) {
    try {
      const packageInfo = JSON.parse(fs.readFileSync(packageJson, 'utf8'))
      const version = packageInfo.dependencies[packageName] || packageInfo.devDependencies[packageName]
      if (version) {
        return version
      }
    } catch {}
  }
}

export function isPackageInstalled(packageName: string) {
  return Boolean(getPackageVersion(packageName))
}

const vueVersion = getMajorVersion(getPackageVersion('vue'))

function getMajorVersion(version: string) {
  let major = ''
  for (const char of version) {
    if (Number.parseInt(char, 10)) {
      major += char
    } else if (major) {
      return Number.parseInt(major, 10)
    }
  }
  return Number.parseInt(major, 10)
}

export const isLegacyVue = vueVersion === 2

interface Context {
  options: CreateConfigOptions
}

const context: Context = { options: {} }

export function setContext({ options }: Context) {
  context.options = options
}

export function getContext() {
  return context
}
