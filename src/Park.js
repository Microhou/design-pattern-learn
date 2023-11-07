class Car {
    constructor(number){
        this.number = number;
    }
}

class Floor {
    constructor(index, places){
        this.index = index;
        this.places = places || [];
    }
    emptyPlaceNumber(){
        let count = 0;
        this.places.forEach(p => {
            if(p.empty){
                count = count + 1;
            }
        });
        return count;
    }
}

class Place {
    constructor(){
        this.empty = true;
    }
    in(){
        this.empty = false;
    }
    out(){
        this.empty = true;
    }
}

class Carmer {
    shot(car){
        return {
            num: car.num,
            inTime : Date.now()
        }
    }
}

class Screen {
    show(car, inTime){
        console.log(`${car.num} 用时 ${Date.now() - inTime()}`)
    }
}

class Park {
    constructor(floors){
        this.floors = floors || [];
        this.carmer = new Carmer();
        this.screen = new Screen();
        this.carList = {} //存储摄像头拍摄和返回的车辆信息
    }
    in(car){
        //通过摄像头获取信息
       let info = this.carmer.shot(car);
       //停到某个车位
       let i = parseInt(Math.random() * 100 % 100);
       const place = this.floors[0].places[i];
       place.in();
       info.place = place;
        // 记录信息
        this.carList[car.num] = info;

    }
    out(car){
        //获取信息
      let carInfo = this.carList[car.num];
      //将停车位清空
      let place = carInfo.place
      place.out()
      // 显示时间
      this.screen.show(car, carInfo.inTime)
      delete this.carList[car.num];
    }
    emptyNumber(){

        return this.floors.map(item => {
            return `${item.index} 层还有${item.emptyPlaceNumber()}空余车位`
        }).join("\n")
    }
}

// 测试
const floors = [];
for (let index = 0; index < 3; index++) {
   const places = [];
   for (let index = 0; index < 100; index++) {
        places[index] = new Place();
   }
   floors[index] = new Floor(index + 1, places);
}

const park = new Park(floors);

const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log("第一辆车进入")
console.log(park.emptyNumber());
park.in(car1);
console.log("第二辆车进入");
console.log(park.emptyNumber());
park.in(car2);