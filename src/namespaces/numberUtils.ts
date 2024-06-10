export namespace NumberUtils {
    export function toCurrency(num: number, locale: Intl.LocalesArgument, currency: string): string {
        return num.toLocaleString(locale, {
            style: 'currency',
            currency,
        });
    }

    export function isNumber(argument: any): argument is number {
        return typeof argument === 'number';
    }

    export function isInteger(argument: any): argument is number {
        return Number.isInteger(argument);
    }

    export function isFloat(argument: any): argument is number {
        return Number(argument) === argument && argument % 1 !== 0;
    }
}