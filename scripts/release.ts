import { fs, question } from 'zx'
import { $$, getCurrentVersion, getNextVersion } from './utils.ts'

async function checkChangelog(newVersion: string) {
  const changelog = await fs.readFile(`changelog.md`, 'utf8')
  if (!changelog.includes(`## [${newVersion}]`)) {
    await $$`node --run changelog`

    const result = await question('Do you want to commit the changelog? (Y/n) ')
    if (result === 'n') {
      throw new Error('Changelog not committed')
    }
    await $$`git add changelog.md`
    await $$`git commit -m "chore: update changelog for v${newVersion}"`
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
} catch (error) {
  console.error(error)
  process.exitCode = 1
}
