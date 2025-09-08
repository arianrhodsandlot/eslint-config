import type { FlatConfigs } from '../../types/eslint.ts'

export function getTailwindConfigs() {
  const tailwindConfigs: FlatConfigs = [
    {
      name: 'tailwind',
      settings: {
        tailwindcss: {
          callees: ['cc', 'classcat', 'classnames', 'clsx', 'cn', 'ctl', 'cva', 'tv', 'twJoin', 'twMerge'],
        },
      },
    },
  ]
  return tailwindConfigs
}
