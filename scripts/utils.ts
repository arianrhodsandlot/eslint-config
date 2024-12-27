import { packageUp } from 'package-up'
import semver from 'semver'
import { $, fs } from 'zx'

export const $$ = $({ verbose: true })

export async function getCurrentVersion() {
  const packageJsonPath = await packageUp()
  if (!packageJsonPath) {
    throw new Error('No package.json found')
  }
  const { name } = await fs.readJson(packageJsonPath)
  const json = await $`pnpm view ${name} --json`
  const { versions } = JSON.parse(`${json}`)
  return versions.at(-1)
}

function isFeatCommit(commitMessage: string) {
  return commitMessage.startsWith('feat:')
}

function isBreakingChangeCommit(commitMessage: string) {
  return commitMessage.includes('!: ')
}

async function getNextVersionType(currentVersion: string) {
  const { stdout } = await $`git log --oneline --no-merges --pretty=format:'%s' HEAD...v${currentVersion}`
  const hasBreakingChange = stdout.split('\n').some((commitMessage) => isBreakingChangeCommit(commitMessage))
  if (hasBreakingChange) {
    return 'major'
  }
  const hasFeat = stdout.split('\n').some((commitMessage) => isFeatCommit(commitMessage))
  if (hasFeat) {
    return 'minor'
  }
  return 'patch'
}

export async function getNextVersion(currentVersion: string) {
  const nextVersionType = await getNextVersionType(currentVersion)
  const nextVersion = semver.inc(currentVersion, nextVersionType)
  if (!nextVersion) {
    throw new Error(`Could not determine next version from ${currentVersion}`)
  }
  return nextVersion
}
