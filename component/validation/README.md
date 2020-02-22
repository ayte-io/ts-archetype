# Ayte / TypeScript / Archetype / Validation

[![npm](https://img.shields.io/npm/v/@ayte/archetype.validation.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype.validation)
[![CircleCI](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.1)

This package contains types related to validation process. This package 
is in incubatory stage and thus may significantly change it's API in
future releases.

## Installation

```console
yarn add @ayte/archetype.validation

# - or -

npm install -S @ayte/archetype.validation
```

## Structure

At this moment this library only defines validator (`IValidator`) and 
violation (`IViolation`) types.

It is implied that violation consists of message, validated value, 
validation root, path from root to value and arbitrary metadata. For
example, if one validates `{"text": 12}`, then violation may have this
object as root, `["text"]` as path, `12` as validated value and 
`not a text` as message.

Validator is just a function that takes in value and returns list of
violations.

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
