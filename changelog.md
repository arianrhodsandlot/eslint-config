# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.18.3] - 2025-02-20
### Fixed
- Fix import path

## [0.18.2] - 2025-02-20
### Fixed
- Fix import path

## [0.18.1] - 2025-02-20
### Fixed
- Fix biome dependences

## [0.18.0] - 2025-02-20
### Added
- Always add extensions while importing files
- Enable tailwindcss plugin by default
- Add support for nested projects
- Add stylistic plugin
### Fixed
- Disable max-lines-per-function for jsx files
- Disable useless rules in markdown files

## [0.17.2] - 2025-01-16
### Fixed
- Disable useless rules in markdown files

## [0.17.1] - 2025-01-16
### Fixed
- Fix the wrong import path

## [0.17.0] - 2025-01-16
### Added
- Add eslint-plugin-biome-x

## [0.16.8] - 2025-01-10
### Fixed
- Fix cjs rules not working

## [0.16.7] - 2025-01-10
### Fixed
- Fix cjs rules not working

## [0.16.6] - 2025-01-10
### Fixed
- Fix cjs rules not working

## [0.16.5] - 2025-01-10
### Fixed
- Ignore cjs related errors in cjs files

## [0.16.4] - 2025-01-03
### Fixed
- Fix exported types

## [0.16.3] - 2024-12-31
### Fixed
- Fix test files detection

## [0.16.2] - 2024-12-30
### Fixed
- use release-kit

## [0.16.1] - 2024-12-30
### Fixed
- Remove redundant dependences

## [0.16.0] - 2024-12-30
### Added
- add official plugins for css/md/json
- migrate to @eslint-react/eslint-plugin from eslint-plugin-react
- migrate to eslint-plugin-import-x from eslint-plugin-import

## [0.15.11] - 2024-08-19
### Fixed
- Turn off no-new-func

## [0.15.10] - 2024-08-16
### Fixed
- Fix wrong types

## [0.15.9] - 2024-08-16
### Changed
- Upgrade dependencies

## [0.15.8] - 2024-07-15
### Changed
- Update Vue rules

## [0.15.7] - 2024-07-15
### Changed
- Upgrade dependencies

## [0.15.6] - 2024-06-11
### Fixed
- Fix global ignores

## [0.15.5] - 2024-06-11
### Fixed
- Fix global ignores

## [0.15.4] - 2024-06-11
### Fixed
- fix: ignore vendors
- fix: update react rules
- fix: turn off import/default because of its buggy behavior

## [0.15.3] - 2024-06-11
### Fixed
- Lint diff files with essential rules

## [0.15.2] - 2024-05-31
### Fixed
- Adjust some vue rules

## [0.15.1] - 2024-05-20
### Fixed
- Turn off the no-undef rule for ts files only
- Improve compatibility

## [0.15.0] - 2024-05-17
### Added
- Add @eslint/compat to support legacy plugins
- Add support for nextjs and remix constant exports
- Add support for i18n

## [0.14.0] - 2024-05-06
### Added
- Replace eslint-plugin-comments with @eslint-community/eslint-plugin-comments
- Update eslint-plugin-sonarjs to support ESLint v9

## [0.13.0] - 2024-04-30
### Added
- Detect should enable diff automatically

### Fixed
- Remove redundant rules
- Update a few rules

## [0.12.2] - 2024-04-28
### Fixed
- Fix default prettier config
- Fix conflicting rules between perfectionist/sort-classes and @typescript-eslint/member-ordering

## [0.12.1] - 2024-04-28
### Fixed
- Fix eslint-plugin-tailwindcss failing to load

## [0.12.0] - 2024-04-28
### Added
- Add support for eslint-plugin-tailwindcss and eslint-plugin-es-x

### Fixed
- Update a few rules

## [0.11.3] - 2024-04-26
### Fixed
- Update a few rules
- Add typescript to dependencies

## [0.11.2] - 2024-04-25
### Fixed
- Update a few rules
- Add typescript to dependencies

## [0.11.1] - 2024-04-22
### Fixed
- Add diff plugin at last
- Add global parser
- Update several rules

## [0.11.0] - 2024-04-22
### Added
- Add support for CommonJS

### Fixed
- Update a few rules
- Improve compatibility

## [0.10.2] - 2024-04-19
### Fixed
- Fix parse error when there are empty dependencies or dev dependencies

## [0.10.1] - 2024-04-19
### Fixed
- Fix config loading failed when vue is not installed

## [0.10.0] - 2024-04-19
### Added
- Add more plugins
- Add support for ESLint 9

### Changed
- Remove shareable configs such as eslint-config-standard, eslint-config-love
- Expose the default config via `default`

## [0.9.1] - 2024-03-24
### Fixed
- Fix exported path

## [0.9.0] - 2024-03-23
### Changed
- Migrate to TypeScript and SWC

## [0.8.5] - 2024-01-13
### Changed
- Upgrade dependencies

## [0.8.4] - 2023-11-07
### Changed
- Upgrade dependencies

## [0.8.3] - 2023-10-06
### Changed
- Upgrade dependencies

### Fixed
- Enforce consistant type import or export declaration

## [0.8.2] - 2023-08-30
### Fixed
- Fix type decleration for `createConfig`
- Use `createConfig` to create default config under the hood

## [0.8.1] - 2023-08-27
### Changed
- Upgrade dependencies

## [0.8.0] - 2023-08-09
### Changed
- Disable type checking rules by default
- Upgrade dependencies

## [0.7.3] - 2023-07-03
### Fixed
- Turn off @typescript-eslint/comma-dangle, no-dupe-class-members, no-undef

## [0.7.2] - 2023-07-03
### Changed
- Upgrade typescript eslint to v6
- Upgrade prettier to v3

## [0.7.1] - 2023-07-03
### Changed
- Upgrade dependencies

## [0.7.0] - 2023-05-24
### Added
- Added several React rules

### Fixed
- Allow empty functions for 'private-constructors', 'protected-constructors', 'decoratedFunctions', 'overrideMethods'
- Turn off @typescript-eslint/no-shadow
- Replace no-use-before-define with @typescript-eslint/no-use-before-define

## [0.6.1] - 2023-04-26
### Fixed
- Turn off unicorn/prefer-module for js files

## [0.6.0] - 2023-04-26
### Added
- Add support for Next.js
- Add support for Tailwind CSS
- Add support for CommonJS projects

### Fixed
- Turn off unicorn/no-useless-undefined's `checkArguments` option
- Turn off @typescript-eslint/no-var-requires for js files
- Turn off unicorn/no-null

## [0.5.0] - 2023-04-09
### Added
- Ignore files listed in `.gitignore`

## [0.4.2] - 2023-04-09
### Fixed
- Fix tests files glob

## [0.4.1] - 2023-04-08
### Added
- Turn off certain rules for test files
- Add type declarations

### Changed
- Remove eslint-plugin-etc since it seems not maintained

### Fixed
- Disable `etc/prefer-interface`

## [0.3.1] - 2023-03-30
### Fixed
- Upgrade dependencies
- Add `jsx-runtime` config to react config

## [0.3.0] - 2023-03-25
### Changed
- Upgrade dependencies
- Add JSDoc for the `createConfig` function

## [0.2.0] - 2023-03-07
### Added
- Add support for markdown files
- Add `eslint-plugin-eslint-comments`

### Fixed
- Fix auto detection of libraries
- Fix react settings
- Turn off `unicorn/switch-case-braces`

## [0.1.0] - 2023-03-06
### Added
- First release!

[Unreleased]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.17.2...HEAD
[0.17.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.18.3...v0.17.2
[0.18.3]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.18.2...v0.18.3
[0.18.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.18.1...v0.18.2
[0.18.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.18.0...v0.18.1
[0.18.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.17.1...v0.18.0
[0.17.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.17.0...v0.17.1
[0.17.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.8...v0.17.0
[0.16.8]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.7...v0.16.8
[0.16.7]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.6...v0.16.7
[0.16.6]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.5...v0.16.6
[0.16.5]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.4...v0.16.5
[0.16.4]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.3...v0.16.4
[0.16.3]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.2...v0.16.3
[0.16.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.1...v0.16.2
[0.16.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.11...v0.16.0
[0.15.11]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.10...v0.15.11
[0.15.10]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.9...v0.15.10
[0.15.9]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.8...v0.15.9
[0.15.8]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.7...v0.15.8
[0.15.7]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.6...v0.15.7
[0.15.6]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.5...v0.15.6
[0.15.5]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.4...v0.15.5
[0.15.4]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.3...v0.15.4
[0.15.3]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.2...v0.15.3
[0.15.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.1...v0.15.2
[0.15.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.12.2...v0.13.0
[0.12.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.11.3...v0.12.0
[0.11.3]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.11.2...v0.11.3
[0.11.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.10.2...v0.11.0
[0.10.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.8.5...v0.9.0
[0.8.5]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.8.4...v0.8.5
[0.8.4]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.8.3...v0.8.4
[0.8.3]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.7.3...v0.8.0
[0.7.3]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.7.2...v0.7.3
[0.7.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.6.1...v0.7.0
[0.6.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.3.1...v0.4.1
[0.3.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/arianrhodsandlot/eslint-config/releases/tag/v0.1.0
