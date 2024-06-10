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
}