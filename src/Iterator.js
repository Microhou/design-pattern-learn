class Iterator {
    constructor(container){
        this.list = container.list;
        this.index = 0;
    }
    next(){
        if(this.hasNext()){
           return this.list[this.index++];
        }
       return null;
    }
    hasNext(){
        // if (this.index >= this.list.length) {
        //     return false;
        // }
        // return true;
        return this.index < this.list.length;
    }
}

class Container {
    constructor(list){
        this.list = list;
    }
    //生成遍历器
    getIterator(){
        return new Iterator(this.list);
    }
}

//测试
let arr = [1,2,3,4,5,6];
let container = new Container(arr);
let iterator = new Iterator(container);

while(iterator.hasNext()){
    console.log(iterator.next())
}

