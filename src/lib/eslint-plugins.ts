import * as eslintPluginCssModule from '@eslint/css'
import * as eslintPluginJsonModule from '@eslint/json'
import * as eslintPluginMarkdownModule from '@eslint/markdown'
import * as eslintPluginEslintCommentsModule from '@eslint-community/eslint-plugin-eslint-comments'
import * as eslintPluginReactModule from '@eslint-react/eslint-plugin'
import * as eslintPluginVueI18nModule from '@intlify/eslint-plugin-vue-i18n'
import * as eslintPluginNextModule from '@next/eslint-plugin-next'
import * as eslintPluginStylisticModule from '@stylistic/eslint-plugin'
import * as eslintPluginCompatModule from 'eslint-plugin-compat'
import * as eslintPluginDiffModule from 'eslint-plugin-diff'
import * as eslintPluginEsXModule from 'eslint-plugin-es-x'
import * as eslintPluginImportXModule from 'eslint-plugin-import-x'
import * as eslintPluginJsdocModule from 'eslint-plugin-jsdoc'
import * as eslintPluginJsxA11yModule from 'eslint-plugin-jsx-a11y'
import * as eslintPluginNModule from 'eslint-plugin-n'
import * as eslintPluginPerfectionistModule from 'eslint-plugin-perfectionist'
import * as eslintPluginPrettierModule from 'eslint-plugin-prettier'
import * as eslintPluginPromiseModule from 'eslint-plugin-promise'
import * as eslintPluginReactHooksModule from 'eslint-plugin-react-hooks'
import * as eslintPluginReactRefreshModule from 'eslint-plugin-react-refresh'
import * as eslintPluginRegexpModule from 'eslint-plugin-regexp'
import * as eslintPluginSecurityModule from 'eslint-plugin-security'
import * as eslintPluginSonarjsModule from 'eslint-plugin-sonarjs'
import * as eslintPluginTailwindcssModule from 'eslint-plugin-tailwindcss'
import * as eslintPluginTsdocModule from 'eslint-plugin-tsdoc'
import * as eslintPluginUnicornModule from 'eslint-plugin-unicorn'
import * as eslintPluginVueModule from 'eslint-plugin-vue'
import * as eslintPluginVueScopedCSSModule from 'eslint-plugin-vue-scoped-css'
import * as eslintPluginVuejsAccessibilityModule from 'eslint-plugin-vuejs-accessibility'
import tseslint from 'typescript-eslint'

function interopESLintPlugin(mod: any) {
  if (mod.default?.configs || mod.default?.rules) {
    return mod.default
  }
  return mod
}

export const eslintPluginCompat = interopESLintPlugin(eslintPluginCompatModule)
export const eslintPluginCss = interopESLintPlugin(eslintPluginCssModule)
export const eslintPluginDiff = interopESLintPlugin(eslintPluginDiffModule)
export const eslintPluginEslintComments = interopESLintPlugin(eslintPluginEslintCommentsModule)
export const eslintPluginEsX = interopESLintPlugin(eslintPluginEsXModule)
export const eslintPluginImportX = interopESLintPlugin(eslintPluginImportXModule)
export const eslintPluginJsdoc = interopESLintPlugin(eslintPluginJsdocModule)
export const eslintPluginJson = interopESLintPlugin(eslintPluginJsonModule)
export const eslintPluginJsxA11y = interopESLintPlugin(eslintPluginJsxA11yModule)
export const eslintPluginMarkdown = interopESLintPlugin(eslintPluginMarkdownModule)
export const eslintPluginN = interopESLintPlugin(eslintPluginNModule)
export const eslintPluginNext = interopESLintPlugin(eslintPluginNextModule)
export const eslintPluginPerfectionist = interopESLintPlugin(eslintPluginPerfectionistModule)
export const eslintPluginPrettier = interopESLintPlugin(eslintPluginPrettierModule)
export const eslintPluginPromise = interopESLintPlugin(eslintPluginPromiseModule)
export const eslintPluginReact = interopESLintPlugin(eslintPluginReactModule)
export const eslintPluginReactHooks = interopESLintPlugin(eslintPluginReactHooksModule)
export const eslintPluginReactRefresh = interopESLintPlugin(eslintPluginReactRefreshModule)
export const eslintPluginRegexp = interopESLintPlugin(eslintPluginRegexpModule)
export const eslintPluginSecurity = interopESLintPlugin(eslintPluginSecurityModule)
export const eslintPluginSonarjs = interopESLintPlugin(eslintPluginSonarjsModule)
export const eslintPluginStylistic = interopESLintPlugin(eslintPluginStylisticModule)
export const eslintPluginTailwindcss = interopESLintPlugin(eslintPluginTailwindcssModule)
export const eslintPluginTsdoc = interopESLintPlugin(eslintPluginTsdocModule)
export const eslintPluginTypescript = interopESLintPlugin(tseslint.plugin)
export const eslintPluginUnicorn = interopESLintPlugin(eslintPluginUnicornModule)
export const eslintPluginVue = interopESLintPlugin(eslintPluginVueModule)
export const eslintPluginVueI18n = interopESLintPlugin(eslintPluginVueI18nModule)
export const eslintPluginVuejsAccessibility = interopESLintPlugin(eslintPluginVuejsAccessibilityModule)
export const eslintPluginVueScopedCSS = interopESLintPlugin(eslintPluginVueScopedCSSModule)
