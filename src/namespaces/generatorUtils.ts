export namespace GeneratorUtils {
    let GeneratorFunction = (function*(){yield undefined;}).constructor;

    export function isGenerator<T>(value: any): value is Generator<T> {
        return value instanceof GeneratorFunction
    }
}