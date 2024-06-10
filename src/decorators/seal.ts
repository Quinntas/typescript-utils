export function Seal(target: any) {
    Object.seal(target)
    Object.seal(target.prototype)
}