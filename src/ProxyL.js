let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test); // 5，test 属性出现在了 target 中！
console.log(target.test); // 5，我们也可以从 proxy 对象读取它

for (const key in proxy) {
   console.log(key)
}

let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
    get(target, prop){
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
})

console.log(numbers[1]);
console.log(numbers[123]);