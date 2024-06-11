import {forEach} from "../iterators";

export function Seal(target: any) {
    Object.seal(target)
    Object.seal(target.prototype)
}

export function DeepSeal(target: any) {
    Seal(target)
    const keys = Object.keys(target)
    forEach(keys, key => {
        const value = target[key]
        if (typeof value === 'object') {
            DeepSeal(value)
        }
    })
}