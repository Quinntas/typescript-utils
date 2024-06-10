import {forEach} from "../iterators";

export class Dataclass {
    equals(other: Dataclass) {
        return this.toString() === other.toString()
    }

    toObject() {
        const keys = Object.keys(this)
        let res: {
            [key: string]: any
        } = {}
        forEach(keys, key => {
            res[key] = (this as { [key: string]: any })[key]
        })
        return res
    }

    toString() {
        return this.toJSON()
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }
}