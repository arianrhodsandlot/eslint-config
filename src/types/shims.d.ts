declare module '@eslint-community/eslint-plugin-eslint-comments' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module '@next/eslint-plugin-next' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: { 'core-web-vitals': Linter.FlatConfig; recommended: Linter.FlatConfig }
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module '@intlify/eslint-plugin-vue-i18n' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-compat' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-es-x' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-import' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-n' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-promise' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-react' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-react-refresh' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-security' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-tailwindcss' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-unicorn' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-vue' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-vuejs-accessibility' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}

declare module 'eslint-plugin-vue-scoped-css' {
  import type { ESLint, Linter } from 'eslint'

  interface Plugin extends ESLint.Plugin {
    configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]>
    rules: NonNullable<ESLint.Plugin['rules']>
  }
  declare const plugin: Plugin
  export = plugin
}
