/**
 * @since 0.1.0
 */
export type IAsyncConsumer<T> = (value: T) => Promise<void>;
