const prototype = {
    getName: function (params) {
        return this.first + ' ' + this.last;
    },
    say: function() {
        console.log('hello')
    }
}

//基于原型创建 x 
const x = Object.create(prototype);
x.first = "A";
x.last = "B";
console.log(x.getName())
x.say();