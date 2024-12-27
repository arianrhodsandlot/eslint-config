import { fs } from 'zx'
import { $$, getCurrentVersion, getNextVersion } from './utils'

async function checkChangelog(newVersion: string) {
  const changelog = await fs.readFile(`changelog.md`, 'utf8')
  if (!changelog.includes(`## ${newVersion}`)) {
    throw new Error(`Changelog does not contain a section for version ${newVersion}`)
  }
}

async function main() {
  const currentVersion = await getCurrentVersion()
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
