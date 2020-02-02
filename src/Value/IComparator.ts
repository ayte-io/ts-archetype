/**
 * Function that satisfies classic comparison principle: if left value
 * is smaller, equal to or bigger than right, then return negative, zero
 * or positive value.
 *
 * @since 0.1.0
 */
export type IComparator<T> = (left: T, right: T) => number;
