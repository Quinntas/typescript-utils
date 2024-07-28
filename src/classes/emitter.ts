import { EventEmitter } from 'events';

export class Emitter<T extends object> extends EventEmitter {
    private readonly eventName: string;

    constructor() {
        super();
        this.eventName = 'event';
    }

    sub(callback: (payload: T) => void): void  {
        this.on(this.eventName, callback);
    }
    pub(payload: T): boolean {
        return super.emit(this.eventName, payload);
    }
}
