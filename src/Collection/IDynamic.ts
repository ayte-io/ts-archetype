/* eslint @typescript-eslint/no-explicit-any: off */

import {IDictionary} from './IDictionary';

/**
 * Represents an untyped map. Differs from standard `object` by
 * absence of compatibility with array type.
 *
 * @since 0.1.0
 */
export type IDynamic = IDictionary<any>;
