import { EventEmitter } from 'events';

export class Emitter<T extends object> extends EventEmitter {
    sub(callback: (payload: T) => void): void  {
        this.on('event', callback);
    }
    pub(payload: T): boolean {
        return super.emit('event', payload);
    }
}
