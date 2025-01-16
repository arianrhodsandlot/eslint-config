import type { FlatConfigs } from '../../types/eslint.ts'

export function getTailwindConfigs() {
  const typeScriptConfigs: FlatConfigs = [
    {
      name: 'tailwind',
      settings: {
        tailwindcss: {
          callees: ['cc', 'classcat', 'classnames', 'clsx', 'cn', 'ctl', 'cva', 'tv', 'twJoin', 'twMerge'],
          classRegex: 'class',
          tags: ['tw'],
        },
      },
    },
  ]
  return typeScriptConfigs
}
