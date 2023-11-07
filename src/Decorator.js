class Circle {
    draw(){
        console.log("画一个圆形");
    }
}

class Decorator {
    constructor(circle){
        this.circle = circle;
    }
    draw(){
        this.circle.draw();
        this.setRedBoarder(circle);
    }
    setRedBoarder(circle){
        console.log(`设置红色边框`)
    }
}

// class Client {
//     constructor(){
//         this.circle = new Circle();
//         this.dec = new Decorator();
//     }

//     main(){

//     }
// }

let circle = new Circle();
circle.draw();

console.log("===========");


let dec = new Decorator(circle);
dec.draw();


class Cat {
    @readonly
    meow() { return `${this.name} says Meow`}
}

Object.defineProperty(Cat.prototype, "meow", {
    value: specifiedFuntion,
    enumerable: false,
    configurable: true,
    writable: true
})

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

function log(target, key, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`calling ${key} with`, arguments)
        return oldValue.call(this,  arguments)
    }

    return descriptor;
}

function testDec(isDec){
    return function(target){
        target.isDec = isDec;
    }
}



// @testDec
// class Demo {

// }


let cat = new Cat();
console.log(car.meow())
