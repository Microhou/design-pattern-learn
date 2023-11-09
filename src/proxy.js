class RealImg {
    constructor(filedName){
        this.filedName = filedName;
        this.loadFromDisk() //初始化即从硬盘中加载
    }
    display(){
        console.log(`display ${this.filedName}`)
    }
    loadFromDisk(){
        console.log("loading ...."+ this.filedName)
    }
}

class ProxyImg {
    constructor(filedName){
        this.realImg = new RealImg(filedName)
    }
    display(){
        this.realImg.display()
    }
}

let proxyImg = new ProxyImg("1.png");
proxyImg.display()

let star = {
    name: "孙悟空",
    age: 300,
    phone: "123455665"
}

//经纪人
let agent = new Proxy(star, {
    get: function(target, key){
        if (key === "phone") {
            return "18611213214"
        }
        if (key === 'price') {
            return 12000;
        }

        return target[key];
    },
    set: function(obj, prop, value){
        if (prop === 'customPrice') {
            if (value < 10000) {
                throw new Error("价格太低")
            } else {
                obj[prop] = value
                return true
            }
        }
    }
})

console.log(agent.name);
console.log(agent.phone);