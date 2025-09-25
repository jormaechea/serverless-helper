# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- `bucket` and `resource` hooks current resources

## [1.15.0] - 2023-10-22
### Added
- Support for async hooks

## [1.14.0] - 2023-07-24
### Added
- Support for `layers` and `addLayers` in the `function` hook

## [1.13.0] - 2023-07-13
### Added
- Lambda URL support by setting the `url` property in the `function` hook

### Fixed
- `iamStatement` error messages fixed

## [1.12.0] - 2023-04-25
### Added
- `rawProperties` propery support for functions

## [1.11.0] - 2023-04-06
### Added
- `reservedConcurrency` property support for functions

## [1.10.0] - 2022-08-29
### Added
- `memorySize` property support for functions

## [1.9.0] - 2020-04-06
### Added
- Custom IAM Role support for `iamStatement` hook.

## [1.8.0] - 2020-03-18
### Added
- `resource` hook added

### Fixed
- `envVar` error messages are now more accurate

## [1.7.1] - 2020-03-12
### Fixed
- Unknown hook error handle added

## [1.7.0] - 2020-03-05
### Added
- `events` property support for functions

### Fixed
- `schedule` property for functions moved to events property

## [1.6.0] - 2020-03-04
### Added
- `schedule` property support for functions

## [1.5.0] - 2020-02-19
### Added
- `package.include` property support for functions
- Bucket `tags` property added

## [1.4.1] - 2020-02-17
### Added
- .npmrc file added to .gitignore

### Fixed
- `iamStatement` core helper fixed. It now sets `iamStatements` inside `provider` object

## [1.4.0] - 2020-02-14
### Added
- `timeout` property support for functions

## [1.3.0] - 2020-02-13
### Added
- `envVars` core helper added

## [1.2.0] - 2020-01-21
### Added
- `iamStatement` core helper added

## [1.1.0] - 2020-01-10
### Added
- `function` core helper added
