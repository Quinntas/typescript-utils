export function newImmutableProxy<T extends object>(target: T): T {
    return new Proxy(target, {
        set: (_target, property, value) => {
            throw new Error(`This object is immutable, cannot assign '${value}' to '${property.toString()}'`)
        },
        deleteProperty: (_target, property) => {
            throw new Error(`This object is immutable, cannot delete '${property.toString()}'`)
        }
    })
}

