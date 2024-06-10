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
}