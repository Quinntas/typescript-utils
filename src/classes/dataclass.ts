export class Dataclass {
    toObject() {
        let res: {
            [key: string]: any
        } = {}
        Object.keys(this).forEach(key => {
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