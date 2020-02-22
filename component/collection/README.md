# Ayte / TypeScript / Archetype / Collection

[![npm](https://img.shields.io/npm/v/@ayte/archetype.collection.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype.collection)
[![CircleCI](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.1)

This small package is designed for holding all collection-related types.

## Installation

```console
yarn add @ayte/archetype.collection

# - or -

npm install -S @ayte/archetype.collection
```

## Structure

Currently there are only two types: `IDictionary<T>`, which is basically
a map with values of type `T`, and `IDynamic`, which is just a type for
an object that contains properties of any type under string keys, i.e.
arrays are not assignable to this type. `IDynamic` may be useful to
specify metadata types but restrict them to be maps. 

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
