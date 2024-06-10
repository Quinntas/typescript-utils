export abstract class ValueObject<T = any> {
    private readonly name: string
    private value: T

    protected constructor(name: string, value: T) {
        this.name = name
        this.value = value
    }

    abstract validate(value: T): T

    get getName(): string {
        return this.name
    }

    get (): T {
        return this.value
    }

    set setValueWithValidation(value: T) {
        this.value = this.validate(value)
    }

    set (value: T) {
        this.value = value
    }
}
