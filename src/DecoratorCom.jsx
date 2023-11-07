function log(target, key, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`calling ${key} with`, arguments, this);
       return oldValue.apply(this, arguments);
    }
    return descriptor;
}

class Math {
    @log
    add(a, b){
        return a + b;
    }
}

let math = new Math();
let result = math.add(2,5);
console.log("log", result);

function DecoratorCom(params) {
    
    return <div>
        this is decorator learning;
    </div>
}

export default DecoratorCom;