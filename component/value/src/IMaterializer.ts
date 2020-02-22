import {IFunction} from '@ayte/archetype.function';
import {Complete} from '@ayte/archetype.core';

/**
 * Specific function designed to fill any missing properties of input
 * value.
 *
 * @since 0.1.0
 */
export type IMaterializer<T> = IFunction<T, Complete<T>>;

export namespace IMaterializer {
    export type Nested<T> = IFunction<T, Complete.Nested<T>>;
}
