import {Enumerate} from "./enumerate";

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;