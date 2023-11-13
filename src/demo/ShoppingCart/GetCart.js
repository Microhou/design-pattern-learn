class Cart {
    constructor(){
        this.list = [];
    }
    add(data){
        this.list.push(data);
    }
    del(id){
        this.list = this.list.filter(item => item.id !== id)
    }
    getList(){
        return this.list.map(item => item.name).join('\n')
    }
}

//返回单例

let getCart = (function () {
    let cart;
    return function () {
        if(!cart){
            cart = new Cart()
        }

        return cart;
    }
})()

export default getCart;