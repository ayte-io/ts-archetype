/**
 * @since 0.1.0
 */
export type IAsyncBiConsumer<T, U> = (alpha: T, beta: U) => Promise<void>;
