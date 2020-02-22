import {Absent} from './Absent';
import {Primitive} from './Primitive';

/**
 * Widens type to include null and undefined.
 *
 * @since 0.1.0
 */
export type Indeterminate<T> = T | Absent;

export namespace Indeterminate {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = Absent | T extends Primitive ? T : {
        [P in keyof T]?: Nested<T[P]>;
    };

    /**
     * @since 0.1.0
     */
    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]?: Nested<T[P]>;
    }
}
