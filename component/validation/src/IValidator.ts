/* eslint @typescript-eslint/no-explicit-any: off */

import {IViolation} from './IViolation';
import {IFunction} from '@ayte/archetype.function';

/**
 * @since 0.1.0
 */
export type IValidator<R, S = string | number> = IFunction<R, Array<IViolation<R, any, S>>>;
