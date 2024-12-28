import _ from 'lodash'
import { fs } from 'zx'
import { getCommits, getCurrentVersion, getNextVersion } from './utils.ts'

function parseCommit(commit: string) {
  const [type, message] = commit.split(':').map((segment) => segment.trim())
  return { message, type }
}

async function main() {
  const currentVersion = await getCurrentVersion()
  const nextVersion = await getNextVersion(currentVersion)
  const commits = await getCommits({ start: `v${currentVersion}` })
  const parsedCommits = commits.map((commit) => parseCommit(commit))
  const groupedCommits = _.groupBy(parsedCommits, 'type')
  const typeMap = { feat: 'Added', fix: 'Fixed' }
  const sections: string[] = []
  for (const type in typeMap) {
    const title = typeMap[type]
    const commits = groupedCommits[type]
    if (commits) {
      const messages = commits.map((commit) => `- ${commit.message}`)
      const section = `### ${title}
${messages.join('\n')}`
      sections.push(section)
    }
  }
  const changelogPath = 'changelog.md'
  const changelog = await fs.readFile(changelogPath, 'utf8')
  const keyword = '## [Unreleased]'
  const replaced = `${keyword}
## [${nextVersion}] - ${new Date().toISOString().slice(0, 10)}
${sections.join('\n')}`
  const newChangelog = changelog.replace(keyword, replaced)
  await fs.writeFile(changelogPath, newChangelog)
}

try {
  await main()
} catch (error) {
  console.error(error)
  process.exitCode = 1
}
