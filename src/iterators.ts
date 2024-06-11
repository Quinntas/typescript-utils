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

