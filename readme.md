# ESLint Config

![npm](https://img.shields.io/npm/v/@arianrhodsandlot/eslint-config)

A set of predefined ESLint config.

## Features
+ Integrated with following ESLint plugins/configs, and configurations recommended by them:
  + For best practices:
    + [eslint-config-standard](https://github.com/standard/eslint-config-standard) and [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
    + [eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments)
    + [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
    + [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
    + [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
    + [eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security)
    + [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs/)
    + [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  + For Styling:
    + [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  + Languages related:
    + [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
    + [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
  + Framework related:
    + [@next/eslint-plugin-next](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin)
    + [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
    + [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
    + [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
+ Framworks related plugins are loaded ondemand.
+ Made for ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Usage
To use this package, ESLint should be configured by an file named `eslint.config.js`, since we are using ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

+ Basic usage:
  ```js
  export { config as default } from '@arianrhodsandlot/eslint-config'
  ```
+ Advanced usage:
  <details>
    <summary>Expand / Collapse</summary>

    + For TypeScript heavy usage:
      ```js
      export { configWithTypeChecking as default } from '@arianrhodsandlot/eslint-config'
      ```

    + Compose predefined configs, by your own hands, or even modify them:
      ```js
      import { configForJs, configForTsWithTypeChecking } from '@arianrhodsandlot/eslint-config'

      configForJs.languageOptions.global.CUSTOM_GLOBAL_VARIABLE = true

      export default [configForJs, configForTsWithTypeChecking, { /** other custome config */ }]
      ```

    + Use the more powerful function `createConfig`
      + `createConfig` is a smart function that can detect should TS rules be enabled or which libraries-related plugins/rules should be + added:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig()
        ```

      + Type checking can be explicitly disabled:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({ typeChecking: false })
        ```

      + Pass an object to `typeChecking`, which can be used to specify your own TypeScript `parserOptions`:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({
          typeChecking: { parserOptions: { project: './tsconfig.lint.json' } },
        })
        ```

      + Do not ignore files listed in `.gitignore`
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({ useGitignore: false })
        ```

      + Extend or override config:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({
          overrides: {
            js: {
              rules: {
                'no-var': 'off'
              },
            },
          },
        })
        ```

      + Overriding can also be done by a function:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({
          overrides: {
            ts(config) {
              return {
                ...config,
                languageOptions: {
                  parser: otherTsParser,
                },
              }
            },
          },
        })
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
          }
        })
        ```

      + Libraries-related plugins/rules can be explictly enabled or disabled by `libraries`:
        ```js
        import { createConfig } from '@arianrhodsandlot/eslint-config'

        export default createConfig({
          libraries: {
            react: true,
          },
        })
        ```
  </details>

## License
[MIT](license)
