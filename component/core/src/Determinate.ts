import {Absent} from './Absent';
import {Scalar} from './Scalar';
import {Primitive} from './Primitive';

/**
 * Represents a constraint on type that prevents null or undefined
 * values.
 *
 * @since 0.1.0
 */
export type Determinate<T> = T extends Absent ? never : T;

export namespace Determinate {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = T extends Absent ? never :
        (T extends Scalar ? T : {
            [P in keyof T]: Nested<T>;
        });

    /**
     * @since 0.1.0
     */
    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T>;
    };
}
