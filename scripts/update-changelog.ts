import { getCurrentVersion } from './utils'

async function main() {
  const currentVersion = await getCurrentVersion()
  console.info(currentVersion)
}

try {
  await main()
} catch {
  process.exitCode = 1
}
