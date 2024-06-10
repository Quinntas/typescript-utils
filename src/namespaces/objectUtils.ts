import {isNullOrUndefined} from "../validators";
import {ArrayUtils} from "./arrayUtils";

export namespace ObjectUtils {
    export function isObject(argument: any): argument is object {
        if (isNullOrUndefined(argument)) return false;
        if (typeof argument !== 'object') return false;
        return !ArrayUtils.isArray(argument);
    }
}