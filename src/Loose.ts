import {Mutable} from './Mutable';
import {Incomplete} from './Incomplete';
import {Primitive} from './Primitive';

/**
 * A special meta-type that relaxes parameter type properties to be
 * mutable and optional.
 *
 * @since 0.1.0
 */
export type Loose<T> = Mutable<Incomplete<T>>;

export namespace Loose {
    /**
     * @since 0.1.0
     */
    export type Nested<T> = Mutable.Nested<Incomplete.Nested<T>>;

    /**
     * @since 0.1.0
     */
    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };
}
