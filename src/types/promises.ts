export type ResolvedPromise<T> = Promise<Awaited<T>> | Awaited<T> | T
export type PossbilePromise<T> = T | Promise<T>;
export type FailablePromise<T> = T | Promise<T> | Error | Promise<Error>;

export function isPromise<T>(value: PossbilePromise<T>): value is Promise<T> {
    return value instanceof Promise;
}

export function resolveManyPossiblePromises(...values: Function[]) {
    function resolveFunction<T>(value: PossbilePromise<T>): Promise<T> {
        return isPromise(value) ? value : Promise.resolve(value);
    }

    return values.map(resolveFunction);
}

