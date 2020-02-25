# Ayte / TypeScript / Archetype / Function

[![npm](https://img.shields.io/npm/v/@ayte/archetype.function.svg?style=flat-square)](https://www.npmjs.com/package/@ayte/archetype.function)
[![CircleCI](https://img.shields.io/circleci/project/github/ayte-io/ts-archetype.svg?style=flat-square)](https://app.circleci.com/github/ayte-io/ts-archetype/pipelines?branch=release%2F0.2)

This package contains function-related types, mostly modeled after Java
types of same purpose. While many people would be more comfortable with
standard `(x: A, y: B) => C` syntax, i find it easier to use 
`IBiFunction<A, B, C>` instead.

## Installation

```console
yarn add @ayte/archetype.function

# - or -

npm install -S @ayte/archetype.function
```

## Structure

There are five base types: function, predicate, consumer, supplier and
runnable. Function, predicate and consumer come in three variants 
(`I<Name>`, `IBi<Name>`, `ITri<Name>`), while supplier and consumer also
have async counterparts (`IAsync<Name>`).

Function is something that takes N parameters and returns a result:

```typescript
type IFunction<T, U> = (value: T) => U;
type IBiFunction<T, U, V> = (alpha: T, beta: U) => V;
type ITriFunction<T, U, V, W> = (alpha: T, beta: U, gamma: V) => W;
```

Predicate is a special "arbiter" type, which takes N parameters and 
returns a boolean. While generally it's function subtype, it is not 
expressed as typed function (though TypeScript won't make any 
difference).

```typescript
type IPredicate<T> = (value: T) => boolean;
type IBiPredicate<T, U> = (alpha: T, beta: U) => boolean;
type ITriPredicate<T, U, V> = (alpha: T, beta: U, gamma: V) => boolean;
```

Consumer is a side-effect function that takes in N parameters and 
doesn't return anything.

```typescript
type IConsumer<T> = (value: T) => void;
type IBiConsumer<T, U> = (alpha: T, beta: U) => void;
type ITriConsumer<T, U, V> = (alpha: T, beta: U, gamma: V) => void;
```

Consumer has asynchronous counterparts.

```typescript
type IAsyncConsumer<T> = (value: T) => Promise<void>;
type IAsyncBiConsumer<T, U> = (alpha: T, beta: U) => Promise<void>;
type IAsyncTriConsumer<T, U, V> = (alpha: T, beta: U, gamma: V) => Promise<void>;
```

Supplier is a factory that takes nothing and returns some value. It may 
be useful for generators or simple factories that produce new object
instance each call.

```typescript
type ISupplier<T> = () => T;
type IAsyncSupplier<T> = () => Promise<T>;
```

Finally, runnable is just a callback that takes nothing and returns 
nothing as well.

```typescript
type IRunnable = () => void;
```

## Licensing

MIT / UPL-1.0

Ayte Labs, 2020
