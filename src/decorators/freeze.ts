import {forEach} from "../iterators";

export function Freeze(target: any) {
    Object.freeze(target)
    Object.freeze(target.prototype)
}

export function DeepFreeze(target: any) {
    Freeze(target)
    const keys = Object.keys(target)
    forEach(keys, key => {
        const value = target[key]
        if (typeof value === 'object') {
            DeepFreeze(value)
        }
    })
}