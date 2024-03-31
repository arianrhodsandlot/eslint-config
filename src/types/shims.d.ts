declare module 'eslint-config-standard' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-eslint-comments' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-import' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-n' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-promise' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-security' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-unicorn' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-perfectionist' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module '@next/eslint-plugin-next' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-react' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}
