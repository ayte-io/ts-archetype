import {Primitive} from './Primitive';

/**
 * Restricts provided type from being `null`. Whether T includes
 * `undefined` is not regarded.
 *
 * @since 0.1.0
 */
export type NullIntolerant<T> = T extends null ? never : T;

export namespace NullIntolerant {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = T extends null ? never :
        (T extends Primitive ? T : {
            [P in keyof T]: Nested<T[P]>;
        });

    /**
     * @since 0.1.0
     */
    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };
}
