# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.11.0] - 2024-04-22
### Feature
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
+ Enforce consistant type import or export declaration

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
### Fixed
- Disable `etc/prefer-interface`

### Added
- Turn off certain rules for test files
- Add type declarations

### Changed
- Remove eslint-plugin-etc since it seems not maintained

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

[unreleased]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.11.0...HEAD
[0.9.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.10.2...v0.11.0
[0.9.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.10.1...v0.10.2
[0.9.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.10.0...v0.10.1
[0.9.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.9.1...v0.10.0
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
[0.2.0]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/arianrhodsandlot/eslint-config/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/arianrhodsandlot/eslint-config/releases/tag/v0.1.0
