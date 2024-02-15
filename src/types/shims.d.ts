declare module 'eslint-config-standard' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-eslint-comments' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules?: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-import' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules?: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-n' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules?: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-promise' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules?: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-security' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules?: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-unicorn' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs?: Record<string, Linter.FlatConfig>
    rules?: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}
