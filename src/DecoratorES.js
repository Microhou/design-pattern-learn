// 装饰器函数，它的第一个参数是目标类

function classDecorator(target) {
    target.hasDecorator = true;
    return target;
}

// 将装饰器“安装”到Button类上
@classDecorator
class Button {

}

// 验证装饰器是否生效
console.log('Button 是否被装饰了：', Button.hasDecorator)

function funcDecorator(target, name, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log('我是Func的装饰器逻辑');
        return originalMethod.apply(this, arguments)
    }
    return descriptor;
}