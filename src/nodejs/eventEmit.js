// const eventEmitter = require('events').EventEmitter;
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {
    constructor(name){
        super();
        this.name = name;
    }
}

const simon = new MyEmitter("simon");
simon.on('bark', function () {
    console.log(this.name, 'barked')
})

setInterval(() => {
    simon.emit('bark');
}, 1000)
// const emitter1 = new MyEmitter();

// // emitter1.on()

// emitter1.on('some', (info) => {
//     //监听some 事件
//     console.log('some event is occured1', info);
// })

// emitter1.on('some', (info) => {
//     //监听some 事件
//     console.log('some event is occured2', info);
// })

// emitter1.emit('some', 'hi function');