/**
 * Java's `Map<String, T>` equivalent.
 *
 * Object with only string keys and externally defined type of
 * properties.
 *
 * @since 0.1.0
 */
export interface IDictionary<T> {
    [index: string]: T;
    [index: number]: never;
}
