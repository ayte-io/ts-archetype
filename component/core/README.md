# Ayte / TypeScript / Archetype / Core

[![npm](https://img.shields.io/npm/v/@ayte/archetype.core.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype.core)
[![CircleCI/Master](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.1)

This package contains some low-level types that are also used in other
archetype packages.

## Installation

```console
yarn add @ayte/archetype.core

# - or -

npm install -S @ayte/archetype.core
```

## Structure

### Basic types

All non-object types (array is considered to be object type, while 
string is not) are described using three union types: `Absent`, union of
`null` and `undefined`, `Scalar`, union of `boolean`, `number`, 
`string`, `symbol` and `bigint`, and `Primitive`, which joins the two 
above.

`Is<T, U>` type equals to true or false whether `T` is a subset of `U`,
while `Not<T, U>` does the opposite. This may be useful for explicit 
value hinting, for example:

```typescript
import {Is, Scalar} from '@ayte/archetype.core';

export function isScalar<T>(subject: T): Is<T, Scalar>;
export function isScalar(subject: any): boolean {
  return ['string', 'boolean', 'number'].indexOf(typeof subject) > -1;
}
// now compiler and IDE will know that following is not just boolean,
// but true:
const check = isScalar('test');
```

`Except<T>` type allows matching any type but `T`, basically it's just
an alias for `Exclude<any, T>`. 

### Constraints

Most constraints comes with one or two additional types contained in
same-named namespace. Those types are `Nested`, which applies constraint
not only to type itself, but to it's properties as well, and 
`Descendant`, which applies constraint to type properties, but not to 
type itself. Some constraints repeat semantics of similar constraints in
es5 library, but since derivative constraints like `Readonly.Nested<T>` 
would only cause confusion with native types from es5 lib, this project
maintains such constraints under different names, even if they have 
exactly same semantics.

`Determinate<T>` / `Indeterminate<T>` pair allows matching type against
`Absent` (`null` / `undefined`), the same as native `NonNullable<T>`.

`NullTolerant<T>` / `NullIntolerant<T>` provides means to allow or 
disallow type to match `null` (not regarding `undefined` in any way).

`Complete<T>` / `Incomplete<T>` allows or disallows type to have 
optional properties.

`Mutable<T>` / `Immutable<T>` controls ability to change type 
properties.

`Solid<T>` and `Loose<T>` are union constraint types. `Solid<T>` ensures
that all type properties are readonly and not optional, while `Loose<T>`
allows all options to be writeable or missing.

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
