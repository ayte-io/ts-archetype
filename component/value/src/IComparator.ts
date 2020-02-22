import {IBiFunction} from '@ayte/archetype.function';
import {Equivalence} from './Equivalence';

/**
 * Function that compares left value to right and returns value that
 * tells whether left is lesser, equal to or greater than right.
 *
 * @since 0.1.0
 */
export type IComparator<T> = IBiFunction<T, T, Equivalence>;
