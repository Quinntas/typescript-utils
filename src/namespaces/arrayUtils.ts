import {isNullOrUndefined} from "../validators";

export namespace ArrayUtils {
    export function isArray<T = any>(argument: any): argument is Array<T> {
        if (isNullOrUndefined(argument)) return false;
        return Array.isArray(argument);
    }

    export function isEmpty<T = any>(array: Array<T>): boolean {
        return array.length === 0;
    }
}