# Ayte / TypeScript / Archetype

[![npm](https://img.shields.io/npm/v/@ayte/archetype.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype)
[![CircleCI](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.2)

This repository contains TypeScript project with basic type 
declarations, such as `Scalar`, `IComparator<T>`, `IPredicate<T>` and
some meta types like `Is<X, Y>` or `Mutable<T>`. This project doesn't
contain any values, thus it should leave zero footprint in compiled
derivatives.

Please note that signatures may be unstable during incubation period 
(but it is guaranteed that they will stay same for pre-1.0 minor 
version).

One may feel that this project is highly affected by family of 
statically-typed OOP languages - and that would be true.

## Installation

```console
yarn add @ayte/archetype

# - or -

npm install -S @ayte/archetype
```

## Structure

- [@ayte/archetype.core](https://www.npmjs.com/package/@ayte/archetype.core) 
([src/core](src/core)) contains most basic types and constraints. It 
obviously doesn't have any dependencies.
- [@ayte/archetype.function](https://www.npmjs.com/package/@ayte/archetype.function) 
([src/function](src/function)) provides types for some commonly used 
function patterns. It also doesn't depend on anything.
- [@ayte/archetype.collection](https://www.npmjs.com/package/@ayte/archetype.collection)
([src/collection](src/collection)) is dedicated to common collection 
types.
- [@ayte/archetype.validation](https://www.npmjs.com/package/@ayte/archetype.validation)
([src/validation](src/validation)) exposes types required for simple 
validation.
- [@ayte/archetype.value](https://www.npmjs.com/package/@ayte/archetype.value)
([src/value](src/value)) is created for soe everyday value types and 
maintenance tasks like comparison. It's the only package that has actual
values in it, while others contain only type definitions.

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
