import {IBiFunction} from '@ayte/archetype.function';

/**
 * Classic comparison contract: return number less than, equal to or
 * greater than zero if left value is lesser than, equal to or greater
 * than right.
 *
 * @since 0.1.0
 */
export type IClassicComparator<T> = IBiFunction<T, T, number>;
