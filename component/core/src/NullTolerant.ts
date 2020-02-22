import {Primitive} from './Primitive';

/**
 * Relaxes T to include `null` as well. Whether or not T includes
 * `undefined` is not regarded.
 *
 * @since 0.1.0
 */
export type NullTolerant<T> = T | null;

export namespace NullTolerant {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = null | T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };

    /**
     * @since 0.1.0
     */
    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };
}
