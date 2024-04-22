# ESLint Config

![npm](https://img.shields.io/npm/v/@arianrhodsandlot/eslint-config)

A set of predefined ESLint config.

## Usage
To use this package, ESLint should be configured by an file named `eslint.config.js`, since we are using ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

+ Basic usage:
  ```js
  export { config as default } from '@arianrhodsandlot/eslint-config'
  ```
  or
  ```js
  export { default } from '@arianrhodsandlot/eslint-config'
  ```
+ For CommonJS environment:
  ```js
  module.exports = require('@arianrhodsandlot/eslint-config').config
  ```
+ Advanced usage:
  <details>
    <summary>Expand / Collapse</summary>

    + Use the more powerful function `createConfig`
      + `createConfig` is a smart function that can detect should TS rules be enabled or which libraries-related plugins/rules should be + added:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig()
        ```

      + Since flat config is actually an array, we can append more config items to it:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({
          append: {
            files: ['**/*.html'],
            plugins: {
              html: eslintHtmlPlugin,
            },
            rules: eslintHtmlPlugin.configs.recommended.rules,
          },
          prepend: {
            ignore: ['build/**/*']
          },
        })
        ```

      + Additional plugins/rules can be explictly enabled or disabled:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({
          markdown: false,
          next: true,
          prettier: false,
          react: true,
          rules: {
            eqeqeq: 'off',
          },
        })
        ```

        The full list of options are listed below.
        ```ts
        export interface CreateConfigOptions {
          /** Append custom flat configs to default */
          append?: FlatConfig | FlatConfigs

          /** Should eslint-plugin-compat be enabled */
          compat?: boolean

          /** Should eslint-plugin-diff be enabled */
          diff?: boolean

          /** Should eslint-plugin-eslint-comments be enabled */
          eslintComments?: boolean

          /** Should eslint-plugin-import be enabled */
          import?: boolean

          /** Should eslint-plugin-jsdoc be enabled */
          jsdoc?: boolean

          /** Should eslint-plugin-markdown be enabled */
          markdown?: boolean

          /** Should eslint-plugin-n be enabled */
          n?: boolean

          /** Should \@next/eslint-plugin-next be enabled */
          next?: boolean

          /** Should eslint-plugin-perfectionist be enabled */
          perfectionist?: boolean

          /** Append custom flat configs to default */
          prepend?: FlatConfig | FlatConfigs

          /** Should eslint-plugin-prettier be enabled */
          prettier?: boolean

          /** Should eslint-plugin-promise be enabled */
          promise?: boolean

          /** Should eslint-plugin-react, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh be enabled */
          react?: boolean

          /** Should eslint-plugin-regexp be enabled */
          regexp?: boolean

          /** Custom rules */
          rules?: FlatConfigRules

          /** Should eslint-plugin-security be enabled */
          security?: boolean

          /** Should eslint-plugin-sonarjs be enabled */
          sonarjs?: boolean

          /** Should eslint-plugin-tsdoc be enabled */
          tsdoc?: boolean

          /** Should \@typescript-eslint/eslint-plugin be enabled */
          typescript?: boolean

          /** Should eslint-plugin-unicorn be enabled */
          unicorn?: boolean

          /** Should eslint-plugin-vue, eslint-plugin-vuejs-accessibility, eslint-plugin-vue-scoped-css be enabled */
          vue?: boolean
        }
        ```
  </details>

## Features
+ Integrated with following ESLint plugins and configurations recommended by them:
  + For best practices:
    + [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
    + [eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments)
    + [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
    + [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
    + [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
    + [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
    + [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)
    + [eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security)
    + [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs/)
    + [eslint-plugin-tsdoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
    + [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  + For Styling:
    + [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
    + [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  + Languages related:
    + [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
    + [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
  + Libraries and frameworks related:
    + React
      + [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
      + [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
      + [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
      + [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
    + Next.js
      + [@next/eslint-plugin-next](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin)
    + Vue.js
      + [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
      + [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)
      + [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility)
  + Others:
    + [eslint-plugin-diff](https://github.com/azat-io/eslint-plugin-perfectionist) (disabled by default)
+ Libraries and frameworks related plugins are loaded ondemand.
+ Made for ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## License
[MIT](license)
