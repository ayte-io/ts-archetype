/**
 * @since 0.1.0
 */
export type IAsyncTriConsumer<T, U, V> = (alpha: T, beta: U, gamma: V) => Promise<void>;
