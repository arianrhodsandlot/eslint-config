import { execSync } from 'node:child_process'
import fs, { readFileSync } from 'node:fs'
import path from 'node:path'
import _ from 'lodash'
import { findSync } from 'new-find-package-json'
import type { CreateConfigOptions } from '../types/config.js'
export const isProduction = process.env.NODE_ENV === 'production'

const { castArray, compact, mergeWith } = _

let gitIgnores: string[]
export function getGitIgnores() {
  if (gitIgnores) {
    return gitIgnores
  }
  try {
    const root = `${execSync('git rev-parse --show-toplevel')}`.trim()
    const gitignorePath = path.resolve(root, '.gitignore')
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8')
    gitIgnores = compact(gitignoreContent.split('\n'))
  } catch {
    gitIgnores = []
  }
  return gitIgnores
}

export function mergeWithConcat(object: any, source: any) {
  mergeWith(object, source, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
      return [...objValue, ...castArray(srcValue)]
    }
  })
  return object
}

function isRootDirectory(directory: string) {
  return directory === path.resolve(directory, '..')
}

function lookupFile(fileName: string) {
  let directory = process.cwd()
  while (true) {
    const filepath = path.join(directory, fileName)
    try {
      return readFileSync(filepath, 'utf8')
    } catch {}

    directory = path.resolve(directory, '..')
    if (isRootDirectory(directory)) {
      return
    }
  }
}

export function lookupFiles(...fileNames: string[]) {
  for (const fileName of fileNames) {
    const content = lookupFile(fileName)
    if (content) {
      return content
    }
  }
}

const packageJsons = [...findSync(process.cwd())]

function getPackageJson() {
  for (const packageJson of packageJsons) {
    try {
      const packageInfo = JSON.parse(fs.readFileSync(packageJson, 'utf8'))
      if (packageInfo) {
        return packageInfo
      }
    } catch {}
  }
}

export function getPackageField(field: string) {
  return getPackageJson()?.field
}

export function getPackageVersion(packageName: string) {
  for (const packageJson of packageJsons) {
    try {
      const packageInfo = JSON.parse(fs.readFileSync(packageJson, 'utf8'))
      if (packageInfo) {
        const version: string = packageInfo.dependencies?.[packageName] || packageInfo.devDependencies?.[packageName]
        if (version) {
          return version
        }
      }
    } catch {}
  }
}

const memo: Record<string, boolean> = {}
export function isPackageInstalled(packageName: string) {
  if (packageName in memo) {
    return memo[packageName]
  }
  memo[packageName] = Boolean(getPackageVersion(packageName))
  return memo[packageName]
}

const vueVersion = getMajorVersion(getPackageVersion('vue'))

function getMajorVersion(version: string | undefined) {
  if (version) {
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

const frontEndPackages = ['astro', 'jquery', 'react', 'solid-js', 'svelte', 'vue', 'zepto']

export function isBrowserProject() {
  return frontEndPackages.some((frontEndPackage) => isPackageInstalled(frontEndPackage))
}

export function isNodeJsProject() {
  return !isBrowserProject()
}

export function shouldEnableDiff() {
  const shortlog = `${execSync('git shortlog -sne --no-merges --all')}`.trim()
  const [majorLine] = shortlog.split('\n')
  const myKeywords = ['arianrhod', 'theguidanceofawhitetower@gmail.com', 'thefalsegodofcausality@outlook.com']
  return myKeywords.every((myKeyword) => !majorLine.includes(myKeyword))
}
