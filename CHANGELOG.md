# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.3] - 25-02-2020

### Changed

- Added reference to @ayte/archetype.value

## [0.2.2] - 25-02-2020

### Changed

- Added reference to @ayte/archetype.function

## [0.2.1] - 25-02-2020

### Changed

- Added reference to @ayte/archetype.collection

## [0.2.0] - 25-02-2020

### Changed

- Whole package has been split into several smaller packages to help
with IDE resolution and reduce nesting.
- This version includes reference to first component package, 
@ayte/archetype.core

## [0.1.2] - 02-02-2020 - YANKED

Technical release.

### Changed:

- Reverted back to one-to-one declaration file mapping
- Changed `types` in package.json to point to `dist` instead of 
`dist/index.d.ts`

## [0.1.1] - 02-02-2020 - YANKED

Technical release.

### Changed:

- Combined all definitions in single file to prevent 
`@ayte/archetype/dist/something/something.ts` imports. 

## [0.1.0] - 02-02-2020 - YANKED

Initial release.
