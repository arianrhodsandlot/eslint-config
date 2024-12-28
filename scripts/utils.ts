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
  const { versions } = JSON.parse(`${json}`) as { versions: string[] }
  const version = versions.at(-1)
  if (!version) {
    throw new Error('Invalid version')
  }
  return version
}

function isFeatCommit(commit: string) {
  return commit.startsWith('feat:')
}

function isBreakingChangeCommit(commit: string) {
  return commit.includes('!: ')
}

export async function getCommits({ end, start }: { end?: string; start?: string } = {}) {
  start ??= `v${await getCurrentVersion()}`
  end ??= 'HEAD'
  const { stdout } = await $`git log --oneline --no-merges --pretty=format:'%s' ${start}...${end}`
  return stdout.split('\n').filter((line) => line.trim())
}

async function getNextVersionType(currentVersion: string) {
  const commits = await getCommits({ start: `v${currentVersion}` })
  const hasBreakingChange = commits.some((commit) => isBreakingChangeCommit(commit))
  if (hasBreakingChange) {
    return 'major'
  }
  const hasFeat = commits.some((commit) => isFeatCommit(commit))
  if (hasFeat) {
    return 'minor'
  }
  return 'patch'
}

export async function getNextVersion(currentVersion?: string) {
  currentVersion ??= await getCurrentVersion()
  const nextVersionType = await getNextVersionType(currentVersion)
  const nextVersion = semver.inc(currentVersion, nextVersionType)
  if (!nextVersion) {
    throw new Error(`Could not determine next version from ${currentVersion}`)
  }
  return nextVersion
}
