export namespace StringUtils {
    export function removeSpaces(str: string, orientation: 'start' | 'end' | 'all' = 'all') {
        switch (orientation) {
            case 'start':
                return str.trimStart();

            case 'end':
                return str.trimEnd();

            case 'all':
                return str.trim();

            default:
                throw new Error(`Orientation ${orientation} not found`);
        }
    }

    export function toRaw(str: string) {
        return String.raw`${str}`;
    }

    export function isString(value: any): value is string {
        return typeof value === 'string';
    }
}