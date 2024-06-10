export namespace EnumUtils {
    export function inEnum(e: {[s: number]: string}, argument: any): boolean {
        return Object.keys(e).some((key) => e[key as any] === argument);
    }
}