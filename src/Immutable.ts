import {Primitive} from './Primitive';

/**
 * @since 0.1.0
 */
export type Immutable<T> = T extends Primitive ? T : {
    readonly [P in keyof T]: T[P];
}

export namespace Immutable {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = T extends Primitive ? T : {
        readonly [P in keyof T]: Nested<T[P]>;
    };

    /**
     * @since 0.1.0
     */
    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };
}
