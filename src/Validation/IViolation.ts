import {IDynamic} from '../Collection';

/**
 * @since 0.1.0
 */
export interface IViolation<R, T, S = string | number> {
    /**
     * Segments traversed from root to this particular value.
     */
    readonly path: S[];
    /**
     * Validation root.
     */
    readonly root: R;
    /**
     * Value inspection of which produced violation.
     */
    readonly subject: T;
    /**
     * Explanation of what went wrong.
     */
    readonly message: string;
    /**
     * Arbitrary metadata.
     */
    readonly metadata?: IDynamic;
}
