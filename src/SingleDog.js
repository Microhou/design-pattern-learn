class SingleDog {
    show(){
        console.log('我是一个单例对象')
    }
    static getInstance(){
        // 判断是否已经new过1个实例
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
console.log(s1 === s2);

SingleDog.getInstance = (function () { // 这里为什么要使用立即执行函数，因为要使用到闭包的原理。
    let instance = null; 
    return function () {
        //判断instance 是否为空
        if (!instance) {
            // 如果为null则new出唯一实例
            instance = new SingleDog();
        }
        return instance;
    }
})()

class Storage {
    static getInstance(){
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        
        return Storage.instance;
    }
    getItem(key){
        return localStorage.getItem(key);
    }
    setItem(key,value){
        return localStorage.setItem(key, value);// 但call setItem 的时候就去执行 localStorage.setItem(key, value)
    }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem('name', '李雷');

// 李雷
console.log(storage1.getItem('name'))
// 也是李雷
console.log(storage2.getItem('name'))

console.log(storage1 === storage2)

// 闭包版
function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key);
}
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value);
}
const Storage = (function () {
    let instance = null;
    return function () {
        if(!instance){
            instance = new StorageBase()
        }
        
        return instance;
    }
})()

// 实现一个全局唯一的Modal弹框

