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

    export function isStringEmpty(value: string): boolean {
        return value === '';
    }

    export function isStringBlank(value: string): boolean {
        return value.trim() === '';
    }

    export function isStringUpperCase(value: string): boolean {
        return value === value.toUpperCase();
    }

    export function isStringLowerCase(value: string): boolean {
        return value === value.toLowerCase();
    }

    export function isStringCapitalized(value: string): boolean {
        return value === value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    export function capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    export function decapitalize(value: string): string {
        return value.charAt(0).toLowerCase() + value.slice(1);
    }

    export function reverse(value: string): string {
        return value.split('').reverse().join('');
    }

    export function countOccurrences(value: string, search: string): number {
        return value.split(search).length - 1;
    }
}