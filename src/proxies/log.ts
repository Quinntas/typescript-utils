export function newLogProxy<T extends object>(target:T, logCallBack: (target: T, property: string | symbol) => void):T {
    return new Proxy(target, {
        get(target, property) {
            logCallBack(target, property)
            return Reflect.get(target, property)
        }
    })
}
