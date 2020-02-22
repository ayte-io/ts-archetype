/**
 * Compiles to true if T is a subset of U, to false if T doesn't
 * intersect with U, just boolean otherwise.
 *
 * Allows compile-time value derivation basing on input type, e.g.:
 *
 * ```
 * function isScalar<T>(subject: T): Is<T, Scalar>;
 * ```
 *
 * @since 0.1.0
 */
export type Is<T, U> = T extends U ? true : false;
