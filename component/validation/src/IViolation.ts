import {IDynamic} from '@ayte/archetype.collection';

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
     * Value that produced violation during inspection.
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
