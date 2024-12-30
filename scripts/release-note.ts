import { parser } from 'keep-a-changelog'
import _ from 'lodash'
import { argv, fs } from 'zx'

async function main() {
  const changelogContent = await fs.readFile('changelog.md', 'utf8')
  const changelog = parser(changelogContent)

  const release = changelog.releases.find((release) =>
    argv.version ? `v${release.version}` === argv.version : release.version,
  )
  if (release) {
    const note = release
      .toString()
      .split('\n')
      .slice(1)
      .map((line) => _.upperFirst(line))
      .join('\n')
    await fs.writeFile('release-note.md', note)
  }
}

try {
  await main()
} catch (error) {
  console.error(error)
  process.exitCode = 1
}
