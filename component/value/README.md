# Ayte / TypeScript / Archetype / Value

[![npm](https://img.shields.io/npm/v/@ayte/archetype.value.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype.value)
[![CircleCI](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.2)

This package consists of common value types and types for everyday tasks
related to values, such as comparison.

## Installation

```console
yarn add @ayte/archetype.value

# - or -

npm install -S @ayte/archetype.value
```

## Structure

### Value types

Packages exposes `IBound<T>`, which describes abstract value bound 
(limit and whether that limit is exclusive or not), `IRange<T>`, which
consists of upper and lower `IBound<T>`s, and `Equivalence`, special 
enum describing comparison result.

### Processing types

As for now, three types are exposed: `IComparator<T>`, 
`IClassicComparator<T>` and `IMaterializer<T>`. 

Comparator types expose standard comparison, allowing caller to know
whether left value is lesser than, equal to or greater than right, the
only difference is that classic comparator returns number, while regular
comparator returns `Equivalence` enum value.

Materializer is a function that takes in partial value and reconstructs
all properties, which is a usual task in configuration reading and other
types of value normalization. 

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
