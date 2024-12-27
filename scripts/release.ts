import { packageUp } from 'package-up'
import semver from 'semver'
import { $, fs } from 'zx'
import { $$ } from './utils'

async function getCurrentVersion(name: string) {
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

async function getNextVersion(currentVersion: string) {
  const nextVersionType = await getNextVersionType(currentVersion)
  const nextVersion = semver.inc(currentVersion, nextVersionType)
  if (!nextVersion) {
    throw new Error(`Could not determine next version from ${currentVersion}`)
  }
  return nextVersion
}

async function checkChangelog(newVersion: string) {
  const changelog = await fs.readFile(`changelog.md`, 'utf8')
  if (!changelog.includes(`## ${newVersion}`)) {
    throw new Error(`Changelog does not contain a section for version ${newVersion}`)
  }
}

async function main() {
  const packageJsonPath = await packageUp()
  if (!packageJsonPath) {
    throw new Error('No package.json found')
  }
  const { name: packageName } = await fs.readJson(packageJsonPath)
  const currentVersion = await getCurrentVersion(packageName)
  const newVersion = await getNextVersion(currentVersion)
  await $$`git pull -r`
  await checkChangelog(newVersion)
  await $$`git tag v${newVersion}`
  await $$`git push origin v${newVersion}`
}

try {
  await main()
} catch {
  process.exitCode = 1
}
