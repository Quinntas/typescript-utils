import { EventEmitter } from 'events';

export class Emitter<T> extends EventEmitter {
    private readonly eventName: string;

    constructor(eventName: string = 'event') {
        super();
        this.eventName = eventName
    }

    sub(callback: (payload: T) => void): void  {
        this.on(this.eventName, callback);
    }

    pub(payload: T): boolean {
        return super.emit(this.eventName, payload);
    }
}
