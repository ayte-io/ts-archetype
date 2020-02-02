# Ayte / Archetype<sup>TS</sup>

[![npm](https://img.shields.io/npm/v/@ayte/archetype.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype)
[![CircleCI/Master](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.1)

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
import {Is, Scalar} from '@ayte/archetype';

export function isScalar<T>(subject: T): Is<T, Scalar>;
export function isScalar(subject: any): boolean {
  return ['string', 'boolean', 'number'].indexOf(typeof subject) > -1;
}
// now compiler and IDE will know that following is not just boolean,
// but true:
const check = isScalar("test");
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

### Collection

All collection types are organized under `Collection` namespace.

`IDictinary<T>` is an interface that ensures all properties of 
implementation are of type `T`, something that would be `Map<String, T>` 
in strongly-typed languages. It is named as dictionary to prevent 
confusion with native `Map` type.

`IDynamic` is a just an object whose properties are of type `any`. It
differs from standard `object` in restricting numeric indexes, thus
not intersecting with array.

### Value

Value namespace exists for some generic functionality regarding values
(i.e. all meta-types like constraints are non-significant for this
functionality).

Notable type that should be mentioned is `IComparator<T>`, a function 
that fulfills standard comparison contract: result is negative, zero or 
positive if left is smaller than, equal to or bigger than right:

```typescript
type IComparator<T> = (left: T, right: T) => number;
```

### Function

Function namespace contains interfaces with specific semantics that are
based on top of standard functions. Whenever it makes sense, type `X` is
also accompanied by `BiX`, `TriX` and `AsyncX`.

`IFunction<T, U>` is the simplest type, which is a bit more 
typing-friendly variant of this:

```typescript
type IFunction<T, U> = (value: T) => U;
```

`IPredicate<T>` produces a boolean value depending on provided input:

```typescript
type IPredicate<T> = (subject: T) => boolean;
```

`IConsumer<T>` simply accepts a value:

```typescript
type IConsumer<T> = (subject: T) => void;
```

`IRunnable` represents a simple callback:

```typescript
type IRunnable = () => void;
```

Finally, `ISupplier<T>` is a parameter-less factory:

```typescript
type ISupplier<T> = () => T;
```

### Validation

At the point of writing, validation provided only two types:

```typescript
interface IViolation<R, T, S = string | number> {
    readonly path: S[];
    readonly root: R;
    readonly subject: T;
    readonly message: string;
}

type IValidator<R, S = string | number> = (subject: R) => Array<IViolation<R, any, S>>;
```

This namespace should be considered highly unstable and has higher 
probability to undergo significant changes in next releases.

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
