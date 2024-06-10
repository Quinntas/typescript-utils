export function isNull(argument: any): argument is null {
    return argument === null ;
}

export function isUndefined(argument: any): argument is undefined {
    return argument === undefined;
}

export function isNullOrUndefined(argument: any): argument is null | undefined {
    return isNull(argument) || isUndefined(argument);
}