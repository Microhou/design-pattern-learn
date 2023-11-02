class Car {
    constructor(number, name){
        this.name = name;
        this.number = number;
    }
}

class Kuaiche extends Car{
    constructor(number, name){
        super(number, name);
        this.price = 1;
    }
}

class Zhuanche extends Car {
    constructor(number, name){
        super(number, name);
        this.price = 2;
    }
}

class Trip {
    constructor(car){
        this.car = car;
    }
    start(){
        console.log(`this trip start, name is ${this.car.name}, car number is ${this.car.number}`)
    }
    end(){
        console.log(`all price are ${this.car.price * 5}`)
    }
}

let car = new Kuaiche("Neta", 23445);
let zCar = new Zhuanche("BYD", 1000);
let trip = new Trip(zCar);
trip.start()
trip.end()