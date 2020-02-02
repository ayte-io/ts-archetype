import {Scalar} from './Scalar';
import {Absent} from './Absent';

/**
 * Unifies all javascript non-object types and `null`.
 *
 * @since 0.1.0
 */
export type Primitive = Scalar | Absent;
