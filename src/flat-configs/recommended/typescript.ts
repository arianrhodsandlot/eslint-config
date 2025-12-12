import tseslint from 'typescript-eslint'
import { getContext, lookupFiles } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getTypescriptConfigs() {
  let { typeaware } = getContext().options
  const tsconfigRootDir = lookupFiles('tsconfig.json')?.path
  if (!tsconfigRootDir) {
    typeaware = false
  }

  const configs = [
    typeaware ? tseslint.configs.recommendedTypeChecked : tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
  ] as unknown as FlatConfigs

  if (typeaware) {
    configs.push({
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
    })
  }

  return configs
}
