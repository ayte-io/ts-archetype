/**
 * Compiles to true if T does not intersect with U, to false if T is
 * subset of U, just boolean otherwise.
 *
 * @see Is
 * @since 0.1.0
 */
export type Not<T, U> = T extends U ? false : true;
