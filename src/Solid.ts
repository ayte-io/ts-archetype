import {Immutable} from './Immutable';
import {Primitive} from './Primitive';
import {Complete} from './Complete';

/**
 * Constraints parameter type to be immutable and have all properties
 * defined.
 *
 * @since 0.1.0
 */
export type Solid<T> = Immutable<Complete<T>>;

export namespace Solid {
    export type Nested<T> = Immutable.Nested<Complete.Nested<T>>;

    export type Descendant<T> = T extends Primitive ? T : {
        [P in keyof T]: Nested<T[P]>;
    };
}
