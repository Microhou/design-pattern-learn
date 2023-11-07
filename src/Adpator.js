// 适配器模式
class Adaptee {
    specificRequest(){
        return "德国标准插头";
    }
}

class Taget {
    constructor(){
        this.adaptee = new Adaptee();
    }

    request(){
        let info = this.adaptee.specificRequest();

        return `${info} -转换器 - 中国标准插头`;
    }
}

// 测试
let target = new Taget();
let res = target.request();
console.log(res);

// var $ = {
//     ajax: function (options) {
//         return ajax(options)
//     }
// }