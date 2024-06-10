export function Freeze(target: any) {
    Object.freeze(target)
    Object.freeze(target.prototype)
}