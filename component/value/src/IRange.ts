import {IBound} from './IBound';

/**
 * @since 0.1.0
 */
export interface IRange<T> {
    minimum?: IBound<T>;
    maximum?: IBound<T>;
}
