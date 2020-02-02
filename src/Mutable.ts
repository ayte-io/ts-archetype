import {Primitive} from './Primitive';

/**
 * Allows modification of any properties of T.
 *
 * @since 0.1.0
 */
export type Mutable<T> = T extends Primitive ? T : {
    -readonly [P in keyof T]: T[P];
}

/**
 * @since 0.1.0
 */
export namespace Mutable {
    export type Nested<T> = T extends Primitive ? T : {
        -readonly [P in keyof T]: Mutable<T[P]>;
    };

    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };
}
