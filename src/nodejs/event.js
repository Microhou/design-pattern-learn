class EventEmitter {
    constructor(){
        this.events = new Map();
    }
    
    on(eventName, listener){
        if (!this.events.has(eventName)) {
            this.events.set(eventName, [])
        }
        this.events.get(eventName).push(listener);
    }
    emit(eventName, ...args){
        if (this.events.has(eventName)) {
            const listeners = this.events.get(eventName);
            listeners.forEach((listener) => {
                listener(...args)
            });
        }
      
    }
}

// 示例用法
const emitter = new EventEmitter();

const listener1 = (arg) => {
  console.log('Listener 1:', arg);
};

const listener2 = (arg) => {
  console.log('Listener 2:', arg);
};

emitter.on('event1', listener1);
emitter.on('event1', listener2);

emitter.emit('event1', 'Hello World!');