import tseslint from 'typescript-eslint'
import { tsGlob } from '../../lib/constants.js'
import { getContext, lookupFiles } from '../../lib/utils.js'
import type { FlatConfigs } from '../../types/eslint.js'

export function getTypescriptConfigs() {
  let { typeaware } = getContext().options
  const tsconfigRootDir = lookupFiles('tsconfig.json')?.path
  if (!tsconfigRootDir) {
    typeaware = false
  }

  const configs = [tseslint.configs.recommended, ...tseslint.configs.stylistic] as unknown as FlatConfigs

  if (typeaware) {
    const config = tseslint.configs.recommendedTypeCheckedOnly.find(
      ({ name }) => name === 'typescript-eslint/recommended-type-checked-only',
    )
    if (config?.rules) {
      configs.push({
        files: [tsGlob],
        ignores: [`**/*.md/${tsGlob}`],
        languageOptions: {
          parserOptions: {
            projectService: {
              warnOnUnsupportedTypeScriptVersion: false,
            },
            tsconfigRootDir,
          },
        },
        rules: config.rules,
      })
    }
  }

  return configs
}
