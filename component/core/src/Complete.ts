import {Primitive} from './Primitive';

/**
 * Complete type is a type without optional fields. Consumers of
 * complete type may be sure that all fields are in place, thus they
 * don't need to deal with anything but actual values.
 *
 * @since 0.1.0
 */
export type Complete<T> = T extends Primitive ? T : {
    [P in keyof T]-?: T[P];
}

export namespace Complete {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = T extends Primitive ? T : {
        [P in keyof T]-?: Nested<T[P]>;
    };
}
