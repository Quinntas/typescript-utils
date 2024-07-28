/*
For loops are faster than native JS iterators like map and forEach

Should you use this ? idk
 */

export function forEach<TElement>(array: TElement[], callback: (value: TElement, index: number) => void) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

export function forEachReverse<TElement>(array: TElement[] , callback: (value: TElement, index: number) => void) {
    for (let i = array.length - 1; i >= 0; i--) {
        callback(array[i], i);
    }
}

export function reduce<TElement, TResult>(array: TElement[], callback: (acc: TResult, value: TElement, index: number) => TResult, initialValue: TResult): TResult {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], i);
    }
    return acc;
}

export function filter<TElement>(array: TElement[], callback: (value: TElement, index: number) => boolean): TElement[] {
    let result: TElement[] = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) result.push(array[i]);
    }
    return result;
}

export function find<TElement>(array: TElement[], callback: (value: TElement, index: number) => boolean): TElement | undefined {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) return array[i];
    }
    return undefined;
}

export function findIndex<TElement>(array: TElement[], callback: (value: TElement, index: number) => boolean): number {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) return i;
    }
    return -1;
}

export function every<TElement>(array: TElement[], callback: (value: TElement, index: number) => boolean): boolean {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i)) return false;
    }
    return true;
}

export function some<TElement>(array: TElement[], callback: (value: TElement, index: number) => boolean): boolean {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) return true;
    }
    return false;
}

export function flatMap<TElement, TResult>(array: TElement[], callback: (value: TElement, index: number) => TResult[]): TResult[] {
    let result: TResult[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(...callback(array[i], i));
    }
    return result;
}

export function mapToObject<TElement, TResult>(array: TElement[], callback: (value: TElement, index: number) => [string, TResult]): { [key: string]: TResult } {
    let result: { [key: string]: TResult } = {};
    for (let i = 0; i < array.length; i++) {
        const [key, value] = callback(array[i], i);
        result[key] = value;
    }
    return result;
}

export function map<TElement, TResult>(array: TElement[], callback: (value: TElement, index: number) => TResult): TResult[] {
    let result: TResult[] = [];
    forEach(array, (value, index) => {
        const callRes = callback(value, index);
        if (callRes !== undefined && callRes !== null) result.push(callRes);
    });
    return result;
}


export function forEachGen<T>(gen: Generator<T>, callback: (value: T) => void) {
    let val = gen.next();
    while (!val.done) {
        callback(val.value);
        val = gen.next();
    }
}

export function includes<T>(array: T[], value: T): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return true;
    }
    return false;
}