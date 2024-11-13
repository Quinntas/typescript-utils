import {Primitives} from "./primitives";

type Mapping = {
    [Key in "d" | "i" | "f"]: number
} &
    { s: string } &
    { [Key in "o" | "O"]: object };

type AddMappedToArray<ArgsArray extends any[], Char> =
    Char extends keyof Mapping ? [...ArgsArray, Mapping[Char]] : ArgsArray;

type FirstChar<T extends string> = T extends `${infer Head}${string}` ? Head : T;

type ArgsFromPlaceholder<
    RemainingString extends string,
    ArgsArray extends any[] = []
> = RemainingString extends `${infer Head}${infer Tail}`
    ? Head extends "%"
        ? ArgsFromPlaceholder<Tail, AddMappedToArray<ArgsArray, FirstChar<Tail>>>
        : ArgsFromPlaceholder<Tail, ArgsArray>
    : [...ArgsArray, ...args: any[]];


type OptionalParams<Input> = Input extends string ? ArgsFromPlaceholder<Input> : any[];

export type log<T extends Primitives> = (
    message?: T, ...optionalParams: OptionalParams<T>
) => void;
