import * as eslintPluginEslintCommentsModule from 'eslint-plugin-eslint-comments'
import * as eslintPluginImportModule from 'eslint-plugin-import'
import * as eslintPluginMarkdownModule from 'eslint-plugin-markdown'
import * as eslintPluginNModule from 'eslint-plugin-n'
import * as eslintPluginPerfectionistModule from 'eslint-plugin-perfectionist'
import * as eslintPluginPrettierModule from 'eslint-plugin-prettier'
import * as eslintPluginPromiseModule from 'eslint-plugin-promise'
import * as eslintPluginSecurityModule from 'eslint-plugin-security'
import * as eslintPluginSonarjsModule from 'eslint-plugin-sonarjs'
import * as eslintPluginUnicornModule from 'eslint-plugin-unicorn'
import * as eslintPluginVueModule from 'eslint-plugin-vue'

function interopESLintPlugin(mod: any) {
  if (mod.default?.configs || mod.default?.rules) {
    return mod.default
  }
  return mod
}

export const eslintPluginEslintComments = interopESLintPlugin(eslintPluginEslintCommentsModule)
export const eslintPluginImport = interopESLintPlugin(eslintPluginImportModule)
export const eslintPluginMarkdown = interopESLintPlugin(eslintPluginMarkdownModule)
export const eslintPluginN = interopESLintPlugin(eslintPluginNModule)
export const eslintPluginPerfectionist = interopESLintPlugin(eslintPluginPerfectionistModule)
export const eslintPluginPrettier = interopESLintPlugin(eslintPluginPrettierModule)
export const eslintPluginPromise = interopESLintPlugin(eslintPluginPromiseModule)
export const eslintPluginSecurity = interopESLintPlugin(eslintPluginSecurityModule)
export const eslintPluginSonarjs = interopESLintPlugin(eslintPluginSonarjsModule)
export const eslintPluginUnicorn = interopESLintPlugin(eslintPluginUnicornModule)
export const eslintPluginVue = interopESLintPlugin(eslintPluginVueModule)
