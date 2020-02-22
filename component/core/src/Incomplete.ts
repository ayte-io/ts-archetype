import {Primitive} from './Primitive';

/**
 * @since 0.1.0
 */
export type Incomplete<T> = T extends Primitive ? T : {
    [P in keyof T]?: T[P];
}

export namespace Incomplete {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = T extends Primitive ? T : {
        [P in keyof T]?: Nested<T[P]>;
    };
}
