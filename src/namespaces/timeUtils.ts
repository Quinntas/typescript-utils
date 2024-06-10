export namespace TimeUtils {
    export function dateToYYYYMMDD(date: Date = new Date()): string {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }

    export function dateToDDMMYYYY(date: Date = new Date()): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    export function isDate(value: any): value is Date {
        return value instanceof Date;
    }

    export function zeroTime(date: Date): Date {
        return new Date(date.setHours(0, 0, 0, 0));
    }

    export function addDays(date: Date, days: number): Date {
        return new Date(date.setDate(date.getDate() + days));
    }

    export function addMonths(date: Date, months: number): Date {
        return new Date(date.setMonth(date.getMonth() + months));
    }

    export function addYears(date: Date, years: number): Date {
        return new Date(date.setFullYear(date.getFullYear() + years));
    }

    export function subtractDays(date: Date, days: number): Date {
        return new Date(date.setDate(date.getDate() - days));
    }

    export function subtractMonths(date: Date, months: number): Date {
        return new Date(date.setMonth(date.getMonth() - months));
    }

    export function subtractYears(date: Date, years: number): Date {
        return new Date(date.setFullYear(date.getFullYear() - years));
    }

    export function isLeapYear(year: number): boolean {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }
}