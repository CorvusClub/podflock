import { Action } from "redux";

export function createAction<T extends string>(type: T): () => Action<T>;
export function createAction<T extends string, AC extends (...args: any[]) => any, Payload extends ReturnType<AC>>(
    type: T,
    creatorFunction?: AC
): (...args: Parameters<AC>) => Action<T> & Payload;
export function createAction<T extends string, AC extends (...args: any[]) => any, Payload extends ReturnType<AC>>(
    type: T,
    creatorFunction?: AC
): (() => Action<T>) | ((...args: Parameters<AC>) => Action<T> & Payload) {
    if (creatorFunction) {
        return (...args: any[]) => {
            const payload = creatorFunction.apply(null, args);
            return { type, ...payload };
        };
    } else {
        return () => ({ type });
    }
}
